<div align="center">
  <br />
  <img src="https://img.shields.io/badge/Framework-NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white&v=4" alt="NestJS" />
  <img src="https://img.shields.io/badge/Language-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&v=4" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Architecture-Strategy_Pattern-8A2BE2?style=for-the-badge&v=4" alt="Architecture" />
  <img src="https://img.shields.io/badge/Security-Validated-2ea44f?style=for-the-badge&v=4" alt="Security" />

  <h1>Aegis Fraud Core</h1>
  <p><b>A high-throughput, modular transaction risk scoring engine designed for real-time threat mitigation.</b></p>
  
  <p>
    <a href="#architectural-highlights">Architectural Highlights</a> •
    <a href="#directory-layout">Directory Layout</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#api-specification">API Specification</a>
  </p>
  <br />
</div>

---

## Architectural Highlights

Aegis Fraud Core decouples complex evaluation logic from execution pipelines to maintain an extensible, production-grade security architecture.

<table width="100%">
  <tr>
    <td width="33%" valign="top">
      <h4>Strategy Pattern</h4>
      <p>Risk calculations are isolated into self-contained strategy classes adhering to a strict interface contract. The engine loops through rules uniformly without tight coupling.</p>
    </td>
    <td width="33%" valign="top">
      <h4>Front-Door Interception</h4>
      <p>Enforces strict payload shape and structural integrity right at the HTTP layer using global pipes. Malformed data is dropped before reaching core logic.</p>
    </td>
    <td width="33%" valign="top">
      <h4>Contextual Analytics</h4>
      <p>Tracks multi-transaction profiles via low-latency state tracking to intercept distributed behavioral threat vectors, such as velocity attacks.</p>
    </td>
  </tr>
</table>

---

## Directory Layout

<details>
<summary><b>Click to expand file tree</b></summary>

```text
src/
├── main.ts                       # Entry point binding global validation pipes
├── app.module.ts
└── transactions/
    ├── dto/
    │   └── create-transaction.dto.ts  # Class-validator protected blueprints
    ├── transactions.controller.ts     # HTTP ingestion layer
    ├── transactions.service.ts        # Strategy pattern orchestrator
    └── rules/
        ├── fraud-rule.interface.ts    # Unified contract for all strategies
        ├── high-amount.rule.ts        # Pure scalar value threshold strategy
        ├── new-recipient.rule.ts      # Identity verification strategy
        └── velocity.rule.ts           # Stateful multi-transaction history strategy