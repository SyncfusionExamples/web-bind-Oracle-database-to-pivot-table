# 📊 Bind Oracle Database to a Syncfusion Pivot Table

> Quick-start samples demonstrating how to bind an Oracle database to a Syncfusion EJ2 Pivot Table (PivotView) across multiple platforms (TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, MVC and Blazor).

---

## 📚 Table of Contents

- [🔍 Project Overview](#-project-overview)
- [🚀 Quick Start](#-quick-start)
- [✨ Key Features](#-key-features)
- [🛠️ Supported Platforms & Dependencies](#️-supported-platforms--dependencies)
- [🧭 Project Structure](#-project-structure)
- [🧩 Minimal Example (PivotView + Web API)](#-minimal-example-pivotview--web-api)
- [⚙️ Configuration & Environment](#️-configuration--environment)
- [🧪 Testing & CI](#-testing--ci)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)

---

## 🔍 Project Overview

This repository is a multi-platform quick-start that shows how to retrieve tabular data from an Oracle database (via an ASP.NET Web API) and display it in Syncfusion's Pivot Table (PivotView) controls. It includes ready-to-run samples and minimal backend code so developers can adapt the pattern to their own datasets and platforms.

Why this repo exists:
- Demonstrate server → client binding pattern for large relational datasets using Oracle and Syncfusion PivotView.
- Provide copy-paste-ready sample projects across major front-end frameworks and .NET server templates.

Real-world use cases:
- Financial and sales reporting dashboards
- Operational analytics for ERP/CRM datasets
- Quick prototyping for BI features using existing Oracle databases

---

## 🚀 Quick Start

Prerequisites
- .NET 6 SDK (for the Web API) or higher
- Node.js (LTS recommended) and npm/yarn (for frontend samples)
- An Oracle database reachable from your machine (or Dockerized) and connection credentials

Start the Web API (MyWebService)

```bash
cd MyWebService
dotnet restore
dotnet run
# API runs by default on http://localhost:5000 or as configured in Properties/launchSettings.json
```

Run a front-end sample (pick one):

TypeScript
```bash
cd Typescript/pivot-table
npm install
npm start   # runs gulp start (dev server)
```

Angular
```bash
cd Angular/pivot-table
npm install
npm start   # ng serve
```

React
```bash
cd React/pivot-table
npm install
npm start
```

Vue
```bash
cd VUE/pivot-table
npm install
npm run dev
```

First success: open the front-end sample in a browser (usually http://localhost:3000 or http://localhost:4200) and verify the pivot table loads data from the running Web API.

---

## ✨ Key Features

- Cross-platform samples: TypeScript, JavaScript, Angular, React, Vue, ASP.NET Core, MVC, Blazor ✅
- Minimal Web API showing Oracle.ManagedDataAccess.Core usage for Oracle connectivity ✅
- Syncfusion EJ2 PivotView integration (FieldList, GroupingBar, CalculatedField support) ✅
- Example project patterns for real-world reporting pipelines ✅
- Lightweight, copy-paste-ready examples for quick prototyping ✅

Benefits:
- Save time integrating Oracle datasets into interactive pivot reports.
- Reusable server → client bindings compatible with Syncfusion components.

---

## 🛠️ Supported Platforms & Dependencies

- Primary languages: JavaScript (client samples), C# (.NET 6 Web API)
- Notable server deps (MyWebService/MyWebService.csproj):
	- `Oracle.ManagedDataAccess.Core` (3.21.90) — Oracle ADO.NET provider for .NET Core
	- `Swashbuckle.AspNetCore` (6.2.3) — Swagger/OpenAPI
	- `Newtonsoft.Json` (13.0.2)
- Example front-end deps (selected):
	- `@syncfusion/ej2` (umbrella) or per-framework packages such as `@syncfusion/ej2-react-pivotview` (32.1.19), `@syncfusion/ej2-vue-pivotview` (32.1.19)
	- Angular 19.x (sample), React 18.x (sample), Vue 2.7 (sample)

System requirements
- Windows/macOS/Linux — Node.js and .NET SDK required for respective parts

---

## 🧭 Project Structure (high level)

- `MyWebService/` — ASP.NET Core Web API that queries Oracle and returns JSON
- `Typescript/`, `Javascript/`, `Angular/`, `React/`, `VUE/` — front-end samples
- `Core/`, `MVC/`, `Blazor/` — server and UI samples using .NET platforms

Open entry points:
- Web API handler: `MyWebService/Controllers/PivotController.cs`
- TypeScript sample host: `Typescript/pivot-table/src/index.html` or `index.js`

---

## 🧩 Minimal Example (PivotView + Web API)

1) Server side: simple controller action (pseudo-code)

```csharp
[HttpGet("/api/pivotdata")]
public IActionResult GetPivotData()
{
		var rows = _oracleService.Query("SELECT Country, Product, Amount, Quantity FROM SalesTable");
		return Ok(rows);
}
```

2) Client side: bind PivotView to API result (example using fetch + EJ2 PivotView)

```js
fetch('/api/pivotdata')
	.then(r => r.json())
	.then(data => {
		var pivot = new ej.pivotview.PivotView({
			dataSourceSettings: { dataSource: data, rows:[{name:'Country'}], columns:[{name:'Product'}], values:[{name:'Amount'}] },
			showFieldList: true,
			height: 400
		});
		pivot.appendTo('#PivotTable');
	});
```

Ensure the API URL is reachable from the front-end; adjust `proxy` or CORS settings if necessary.

---

## ⚙️ Configuration & Environment

- Oracle connection: configure connection string in `MyWebService/appsettings.json` or environment variable `ConnectionStrings__Oracle`.

Example `appsettings.json` snippet:

```json
{
	"ConnectionStrings": {
		"Oracle": "User Id=your_user;Password=your_pwd;Data Source=your_host:1521/your_service"
	}
}
```

- CORS: If front-end runs on different host/port, enable CORS in `Program.cs` to allow the client origin.

Troubleshooting tips:
- If Oracle driver throws errors, confirm `Oracle.ManagedDataAccess.Core` version compatibility and Oracle client connectivity.
- Use Swagger (Swashbuckle) at `/swagger` to inspect API responses.

---

## 🧪 Testing & CI

- Front-end tests: sample projects include framework-specific test setups (Jasmine/Karma for Angular, Jest for React scaffold).
- CI: add GitHub Actions workflows to build both the Web API and front-end projects; sample workflows can be added under `.github/workflows/`.

---

## 🤝 Contributing

Contributions welcome — please follow these steps:

1. Fork the repo and create a branch: `feature/your-change`
2. Run and verify the specific platform sample locally
3. Open a Pull Request with a clear description and screenshots if UI changes

---

## 📜 License & Support

This is a **commercial product** subject to the Syncfusion End User License Agreement (EULA).

**Free Community License** is available for qualifying users/organizations:  
- Annual gross revenue < $1 million USD  
- 5 or fewer total developers  
- 10 or fewer total employees  

The community license allows free use in both internal and commercial applications under these conditions.  
No registration or approval is required — just comply with the terms.

**Paid Licenses** are required for:  
- Larger organizations  
- Teams exceeding the community license limits  
- Priority support, custom patches, or on-premise deployment options  

Purchase options and pricing: https://www.syncfusion.com/sales/products  
30-day free trial (full features, no credit card required): https://www.syncfusion.com/downloads/essential-js2  
Community License details & FAQ: https://www.syncfusion.com/products/communitylicense  
Full EULA: https://www.syncfusion.com/eula/es/

© 2026 Syncfusion, Inc. All Rights Reserved.
