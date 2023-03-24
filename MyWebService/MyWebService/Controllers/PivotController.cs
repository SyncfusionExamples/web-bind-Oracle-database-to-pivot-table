using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Oracle.ManagedDataAccess.Client;
using System.Data;

namespace MyWebService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetOracleDbResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchOracleDbResult());
        }

        private static DataTable FetchOracleDbResult()
        {
            // Replace with your own connection string.
            string connectionString = "Data Source=(DESCRIPTION =" +
            "(ADDRESS = (PROTOCOL = TCP)(HOST = 172.16.200.86)(PORT = 1521))" +
            "(CONNECT_DATA =" + "(SERVICE_NAME = ORCL)));" + "User Id=SYSTEM;Password=coolcomp@123;";
            OracleConnection oracleConnection = new OracleConnection(connectionString);
            oracleConnection.Open();
            OracleCommand command = new OracleCommand("SELECT * FROM EMPLOYEES", oracleConnection);
            OracleDataAdapter dataAdapter = new OracleDataAdapter(command);
            DataTable dataTable = new DataTable();
            dataAdapter.Fill(dataTable);
            oracleConnection.Close();
            return dataTable;
        }
    }
}
