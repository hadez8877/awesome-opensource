<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    一個真正<strong>開源資源</strong>的集合 &mdash;
    <br/>
    因為我也厭倦了那些並非真正開源的專案。
    <br/><br/>
  </p>

</div>

<p align="center">
  <a href="https://awesome.re" rel="nofollow"><img src="https://awesome.re/badge.svg" alt="Awesome Repository"></a>
  <a href="https://github.com/hadez8877/awesome-opensource/blob/main/LICENSE" rel="nofollow"><img src="https://img.shields.io/github/license/hadez8877/awesome-opensource?color=blue" alt="License"></a>
  <a href="https://github.com/hadez8877/awesome-opensource/blob/main/CONTRIBUTING.md" rel="nofollow"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
</p>

<div align="center">
  <p>
    <a href="README.md">English</a> |
    <a href="README.zh-cn.md">简体中文</a> |
    <a href="README.zh-tw.md">繁體中文</a> |
    <a href="README.es.md">Español</a> |
    <a href="README.ja.md">日本語</a> |
    <a href="README.ar.md">العربية</a> |
    <a href="README.br.md">Português (Brasil)</a>
  </p>
</div>

## 目錄

<!--lint disable awesome-list-item-->

- [Backend / BaaS](#backend--baas)
  - [API & GraphQL](#api--graphql)
  - [認證與身分](#認證與身分)
  - [Backend as a Service](#backend-as-a-service)
  - [框架](#框架)
- [CLI 工具](#cli-工具)
  - [開發工具](#開發工具)
  - [檔案管理與導覽](#檔案管理與導覽)
  - [套件管理器與運行時](#套件管理器與運行時)
  - [效率與工作流程](#效率與工作流程)
  - [Shell 與終端機環境](#shell-與終端機環境)
  - [系統監控與實用工具](#系統監控與實用工具)
- [資料庫](#資料庫)
  - [圖資料庫](#圖資料庫)
  - [鍵值與快取資料庫](#鍵值與快取資料庫)
  - [NoSQL 資料庫](#nosql-資料庫)
  - [關聯式資料庫](#關聯式資料庫)
  - [搜尋與分析引擎](#搜尋與分析引擎)
  - [時序資料庫](#時序資料庫)
  - [向量資料庫](#向量資料庫)
- [DevOps](#devops)
  - [容器與虛擬化](#容器與虛擬化)
  - [Kubernetes 與編排](#kubernetes-與編排)
  - [CI / CD](#ci--cd)
  - [基礎設施即程式碼](#基礎設施即程式碼)
  - [監控與可觀測性](#監控與可觀測性)
  - [網路與反向代理](#網路與反向代理)
  - [密鑰與安全](#密鑰與安全)
- [行動應用](#行動應用)
  - [瀏覽器與網際網路](#瀏覽器與網際網路)
  - [檔案管理與實用工具](#檔案管理與實用工具)
  - [啟動器與個人化](#啟動器與個人化)
  - [多媒體與音樂](#多媒體與音樂)
  - [通訊與訊息](#通訊與訊息)
  - [密碼管理器與安全](#密碼管理器與安全)
  - [效率與筆記](#效率與筆記)
  - [視訊與串流](#視訊與串流)
- [安全](#安全)
  - [容器與 Kubernetes 安全](#容器與-kubernetes-安全)
  - [端點與運行時安全](#端點與運行時安全)
  - [網路安全與監控](#網路安全與監控)
  - [隱私與匿名](#隱私與匿名)
  - [逆向工程與滲透測試](#逆向工程與滲透測試)
  - [密鑰管理與加密](#密鑰管理與加密)
  - [漏洞掃描與分析](#漏洞掃描與分析)
- [自架設](#自架設)
  - [開發平台與 Git 服務](#開發平台與-git-服務)
  - [DNS、網路與隱私](#dns網路與隱私)
  - [Homelab 與伺服器管理](#homelab-與伺服器管理)
  - [媒體伺服器與串流](#媒體伺服器與串流)
  - [監控與可用性](#監控與可用性)
  - [密碼管理器與認證](#密碼管理器與認證)
  - [照片與檔案管理](#照片與檔案管理)
  - [RSS、稍後閱讀與知識](#rss稍後閱讀與知識)
- [軟體 / SaaS](#軟體--saas)
  - [分析與監控](#分析與監控)
  - [自動化與內部工具](#自動化與內部工具)
  - [通訊與支援](#通訊與支援)
  - [文件與知識庫](#文件與知識庫)
  - [檔案儲存與雲端](#檔案儲存與雲端)
  - [效率與協作](#效率與協作)
- [Web 開發](#web-開發)
  - [Angular UI 函式庫](#angular-ui-函式庫)
  - [程式碼編輯器](#程式碼編輯器)
  - [設計工具](#設計工具)
  - [圖示](#圖示)
  - [React UI 函式庫](#react-ui-函式庫)
  - [UI 元件](#ui-元件)
  - [Vue UI 函式庫](#vue-ui-函式庫)

## Backend / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - 現代輕量級 GraphQL 伺服器。
- [PostgREST](https://github.com/PostgREST/postgrest) - 將 PostgreSQL 即刻轉換為 REST API。
- [tRPC](https://github.com/trpc/trpc) - 無需 Schema 的端到端型別安全 API。

### 認證與身分

- [Authelia](https://github.com/authelia/authelia) - 自架設的多因素認證解決方案。
- [Keycloak](https://github.com/keycloak/keycloak) - 功能齊全的開源 IAM 解決方案（SSO、OAuth2、OIDC、SAML），由 Red Hat 支援。
- [Ory Kratos](https://github.com/ory/kratos) - 注重安全的認證系統，核心完全開源。

### Backend as a Service

- [Parse Server](https://github.com/parse-community/parse-server) - 成熟的開源後端，無關鍵功能封閉。
- [PocketBase](https://github.com/pocketbase/pocketbase) - 內嵌 SQLite、認證和 REST API 的後端，完全開源。
- [Supabase](https://github.com/supabase/supabase) - 基於 PostgreSQL 構建的開源 Firebase 替代方案。
- [UnDB](https://github.com/undb-io/undb) - 自架設的無程式碼資料庫和 BaaS（基於 SQLite，類似 Airtable）。

### 框架

- [AdonisJS](https://github.com/adonisjs/core) - 採用 TypeScript 優先的現代 Node.js 框架。
- [Elysia](https://github.com/elysiajs/elysia) - 高效能的 Bun 優先框架，具有強型別支援。
- [FeathersJS](https://github.com/feathersjs/feathers) - 靈活的框架，適用於 REST 和即時應用。
- [Hono](https://github.com/honojs/hono) - 超快框架，適用於現代運行時（Edge、Bun、Deno、Node）。
- [LoopBack](https://github.com/loopbackio/loopback-next) - 基於 OpenAPI 的進階 API 框架。
- [Midway](https://github.com/midwayjs/midway) - 受 Spring 啟發的 Node.js 依賴注入框架。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 快速強大的微服務框架。
- [Wasp](https://github.com/wasp-lang/wasp) - 宣告式全端框架，自動產生後端。

## CLI 工具

### 開發工具

- [bat](https://github.com/sharkdp/bat) - `cat` 的替代品，支援語法標註和 Git 整合。
- [delta](https://github.com/dandavison/delta) - 支援語法標註的分頁器，用於 Git 和 diff 輸出。
- [fd](https://github.com/sharkdp/fd) - 簡單、快速、使用者友善的 `find` 替代品。
- [httpie](https://github.com/httpie/cli) - 對使用者友善的命令列 HTTP 客戶端，適用於 API 和 Web 服務。
- [hyperfine](https://github.com/sharkdp/hyperfine) - 帶有統計分析功能的命令列基準測試工具。
- [jq](https://github.com/jqlang/jq) - 輕量靈活的終端機 JSON 處理器。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Docker 和容器管理的終端機 UI。
- [lazygit](https://github.com/jesseduffield/lazygit) - 簡單的 Git 操作終端機 UI。
- [ripgrep](https://github.com/BurntSushi/ripgrep) - 極速遞迴搜尋工具，遵循 `.gitignore` 規則。
- [xh](https://github.com/ducaale/xh) - 友善快速的 HTTP 客戶端，作為 HTTPie 的替代品。
- [yq](https://github.com/mikefarah/yq) - 受 jq 啟發的可攜式 YAML、JSON、XML 和 TOML 處理器。

### 檔案管理與導覽

- [broot](https://github.com/Canop/broot) - 帶有模糊搜尋的互動式目錄樹導覽器。
- [fzf](https://github.com/junegunn/fzf) - 通用命令列模糊搜尋器。
- [nnn](https://github.com/jarun/nnn) - 輕量且極速的終端機檔案瀏覽器。
- [ranger](https://github.com/ranger/ranger) - 帶有 Vim 風格快捷鍵的主控台檔案管理器。
- [yazi](https://github.com/sxyazi/yazi) - 使用 Rust 編寫的極速終端機檔案管理器。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - 受 z 啟發、基於存取頻率的更智慧的 `cd` 命令。

### 套件管理器與運行時

- [asdf](https://github.com/asdf-vm/asdf) - 可擴充的版本管理器，支援多種運行時和工具。
- [Bun](https://github.com/oven-sh/bun) - 快速的 JavaScript 運行時、套件管理器和打包器。
- [Deno](https://github.com/denoland/deno) - 使用 Rust 構建的安全 JavaScript 和 TypeScript 運行時。
- [Homebrew](https://github.com/Homebrew/brew) - macOS 和 Linux 上流行的套件管理器。
- [pnpm](https://github.com/pnpm/pnpm) - 快速且節省磁碟空間的 JavaScript 套件管理器。

### 效率與工作流程

- [atuin](https://github.com/atuinsh/atuin) - Shell 歷史記錄同步和搜尋引擎，支援加密儲存。
- [Glow](https://github.com/charmbracelet/glow) - 在終端機中美觀呈現 Markdown 檔案。
- [gum](https://github.com/charmbracelet/gum) - 用於構建精美 Shell 腳本和終端機工作流程的工具。
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - 強大的 CLI 任務管理和效率工具。
- [wtfutil](https://github.com/wtfutil/wtf) - 用於顯示開發者資訊的個人終端機儀表板。

### Shell 與終端機環境

- [Fish Shell](https://github.com/fish-shell/fish-shell) - 使用者友善的智慧 Shell，支援自動建議和現代化預設配置。
- [Nushell](https://github.com/nushell/nushell) - 圍繞結構化資料構建的現代化 Shell。
- [tmux](https://github.com/tmux/tmux) - 終端機複用器，用於管理持久性工作階段和面板。
- [Warp](https://github.com/warpdotdev/Warp) - 基於 Rust 的現代化終端機，支援 AI 和協作功能。
- [WezTerm](https://github.com/wez/wezterm) - 使用 Rust 編寫的 GPU 加速跨平台終端機模擬器。
- [Zellij](https://github.com/zellij-org/zellij) - 注重易用性和可擴充性的終端機工作區和複用器。

### 系統監控與實用工具

- [bottom](https://github.com/ClementTsang/bottom) - 受 htop 啟發的跨平台圖形化行程和系統監控器。
- [btop](https://github.com/aristocratos/btop) - 適用於 Linux、macOS 和 BSD 的現代化、視覺豐富的資源監控器。
- [dua](https://github.com/Byron/dua-cli) - 帶有互動式終端機 UI 的快速磁碟使用量分析器。
- [dust](https://github.com/bootandy/dust) - 使用 Rust 編寫的更直覺的 `du` 替代品。
- [htop](https://github.com/htop-dev/htop) - 互動式行程檢視器和系統監控器。
- [procs](https://github.com/dalance/procs) - `ps` 的現代化替代品，輸出支援彩色和結構化顯示。

## 資料庫

### 圖資料庫

- [Dgraph](https://github.com/hypermodeinc/dgraph) - 分散式圖資料庫，提供 GraphQL 原生 API。

### 鍵值與快取資料庫

- [Apache Ignite](https://github.com/apache/ignite) - 分散式記憶體資料庫和快取平台。
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - 相容於 Redis 和 Memcached API 的現代化記憶體資料儲存。
- [etcd](https://github.com/etcd-io/etcd) - 用於 Kubernetes 協調和服務發現的分散式鍵值儲存。
- [Valkey](https://github.com/valkey-io/valkey) - 社群驅動的 Redis 分支，專注於完全開源開發。

### NoSQL 資料庫

- [ArangoDB](https://github.com/arangodb/arangodb) - 支援圖、文件和鍵值資料模型的多模型資料庫。
- [Cassandra](https://github.com/apache/cassandra) - 為高可用性而構建的高度可擴充寬列資料庫。
- [CouchDB](https://github.com/apache/couchdb) - 分散式 JSON 文件資料庫，支援複製和離線優先。
- [FerretDB](https://github.com/FerretDB/FerretDB) - 基於 PostgreSQL 構建的開源 MongoDB 替代方案。
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - 支援 changefeed 的即時分散式資料庫。

### 關聯式資料庫

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - 面向分析和可觀測性的高效能欄式資料庫。
- [CockroachDB](https://github.com/cockroachdb/cockroach) - 專注於可擴充性和容錯能力的分散式 SQL 資料庫。
- [DuckDB](https://github.com/duckdb/duckdb) - 專為快速 OLAP 工作負載設計的行程內分析資料庫。
- [FoundationDB](https://github.com/apple/foundationdb) - 專為強一致性設計的分散式交易鍵值資料庫。
- [LibSQL](https://github.com/tursodatabase/libsql) - 專注於分散式和嵌入式工作負載的 SQLite 開源分支。
- [MariaDB](https://github.com/MariaDB/server) - 社群驅動的關聯式資料庫，從 MySQL 分支而來，具有強大的開源治理。
- [PostgreSQL](https://github.com/postgres/postgres) - 以可靠性、可擴充性和 SQL 合規性著稱的進階開源關聯式資料庫。
- [RisingWave](https://github.com/risingwavelabs/risingwave) - 相容於 PostgreSQL 的分散式 SQL 串流資料庫。
- [SQLite](https://github.com/sqlite/sqlite) - 輕量級嵌入式關聯式資料庫，廣泛用於應用和行動裝置。
- [TiDB](https://github.com/pingcap/tidb) - 相容於 MySQL 的分散式資料庫，專為 HTAP 和雲端原生工作負載設計。
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - 相容於 PostgreSQL 的高效能分散式資料庫，適用於可擴充應用。

### 搜尋與分析引擎

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - 專為高效能索引和查詢設計的全文搜尋引擎。
- [Meilisearch](https://github.com/meilisearch/meilisearch) - 快速、對開發者友善的搜尋引擎，支援拼字修正。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - 社群驅動的搜尋和分析引擎，從 Elasticsearch 分支而來。
- [Sonic](https://github.com/valeriansaliou/sonic) - 輕量級無 Schema 搜尋後端，針對速度優化。
- [Typesense](https://github.com/typesense/typesense) - 專注於簡單性和效能的開源即時搜尋引擎。

### 時序資料庫

- [QuestDB](https://github.com/questdb/questdb) - 專注於快速 SQL 分析的高效能時序資料庫。
- [TDengine](https://github.com/taosdata/TDengine) - 專為 IoT、工業和監控資料設計的時序平台。

### 向量資料庫

- [Chroma](https://github.com/chroma-core/chroma) - 專為 LLM 應用設計的輕量級嵌入資料庫。
- [LanceDB](https://github.com/lancedb/lancedb) - 針對 AI 應用和本地優先工作流程優化的嵌入式向量資料庫。
- [Milvus](https://github.com/milvus-io/milvus) - 為機器學習嵌入和 AI 工作負載構建的可擴充向量資料庫。
- [Qdrant](https://github.com/qdrant/qdrant) - 面向 AI 和語義搜尋應用的向量相似度搜尋引擎。
- [SurrealDB](https://github.com/surrealdb/surrealdb) - 結合文件、圖和關聯式功能並支援向量的多模型資料庫。
- [Weaviate](https://github.com/weaviate/weaviate) - 支援 GraphQL 和 AI 原生能力的開源向量搜尋引擎。

## DevOps

### 容器與虛擬化

- [containerd](https://github.com/containerd/containerd) - Kubernetes 和 Docker 使用的高效能容器運行時。
- [CRI-O](https://github.com/cri-o/cri-o) - Kubernetes 原生容器運行時，實現 CRI 標準。
- [Incus](https://github.com/lxc/incus) - 從 LXD 分支而來的社群驅動的現代化容器和虛擬機管理器。
- [LXC](https://github.com/lxc/lxc) - 輕量級 Linux 容器運行時，支援低階系統容器。
- [Podman](https://github.com/containers/podman) - 注重安全和 OCI 相容性的無守護行程容器引擎。

### Kubernetes 與編排

- [Argo CD](https://github.com/argoproj/argo-cd) - Kubernetes 的宣告式 GitOps 持續交付工具。
- [Flux](https://github.com/fluxcd/flux2) - GitOps 工具包，用於保持 Kubernetes 叢集與 Git 儲存庫同步。
- [Helm](https://github.com/helm/helm) - Kubernetes 應用的套件管理器。
- [k3s](https://github.com/k3s-io/k3s) - 針對邊緣和 IoT 工作負載優化的輕量級 Kubernetes 發行版。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - 領先的開源容器編排平台。
- [Rancher](https://github.com/rancher/rancher) - 用於多叢集操作的 Kubernetes 管理平台。

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - 基於容器的持續整合系統，支援宣告式管線。
- [GoCD](https://github.com/gocd/gocd) - 專注於複雜工作流程的開源持續交付伺服器。
- [Jenkins](https://github.com/jenkinsci/jenkins) - 可擴充的 CI/CD 管線自動化伺服器。
- [Tekton](https://github.com/tektoncd/pipeline) - Kubernetes 原生的 CI/CD 系統建立框架。
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - 受 Drone 啟發的輕量級全開源 CI/CD 系統。

### 基礎設施即程式碼

- [Ansible](https://github.com/ansible/ansible) - 無代理程式自動化工具，用於配置管理和供應。
- [Atlantis](https://github.com/runatlantis/atlantis) - Terraform 和 OpenTofu 專案的 GitOps 工作流程自動化。
- [Crossplane](https://github.com/crossplane/crossplane) - 基於 Kubernetes 的雲端基礎設施控制平面框架。
- [OpenTofu](https://github.com/opentofu/opentofu) - 從 Terraform 分支而來的社群驅動基礎設施即程式碼工具。
- [Pulumi](https://github.com/pulumi/pulumi) - 使用熟悉程式語言的基礎設施即程式碼平台。

### 監控與可觀測性

- [Jaeger](https://github.com/jaegertracing/jaeger) - 用於微服務監控的分散式追蹤平台。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - 遙測資料收集的開放標準和工具。
- [Prometheus](https://github.com/prometheus/prometheus) - 專為可靠性和可擴充性設計的監控和告警工具包。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 高效能時序資料庫和監控套件。

### 網路與反向代理

- [Caddy](https://github.com/caddyserver/caddy) - 支援自動 HTTPS 和簡單設定的 Web 伺服器。
- [CoreDNS](https://github.com/coredns/coredns) - 靈活可擴充的 DNS 伺服器，常用於 Kubernetes。
- [HAProxy](https://github.com/haproxy/haproxy) - 可靠的高可用負載平衡器和代理伺服器。
- [Nginx](https://github.com/nginx/nginx) - 高效能 Web 伺服器和反向代理。
- [Traefik](https://github.com/traefik/traefik) - 支援自動服務發現的現代化反向代理和 Ingress 控制器。

### 密鑰與安全

- [Falco](https://github.com/falcosecurity/falco) - 容器和 Kubernetes 的運行時安全監控。
- [Infisical](https://github.com/Infisical/infisical) - 面向團隊和基礎設施的開源密鑰管理平台。
- [Step CA](https://github.com/smallstep/certificates) - 私有憑證頒發機構和自動化 TLS 管理解決方案。
- [Trivy](https://github.com/aquasecurity/trivy) - 容器、相依套件、Kubernetes 和 IaC 的安全掃描器。

## 行動應用

### 瀏覽器與網際網路

- [Cromite](https://github.com/uazo/cromite) - 注重隱私的 Chromium 分支，支援廣告封鎖。
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - Mozilla 開發的開源行動瀏覽器。
- [Fulguris](https://github.com/Slion/Fulguris) - 注重隱私的輕量級 Android 瀏覽器。
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - Android 上的開源 Reddit 客戶端。
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - 加固的 Firefox 分支，增強 Android 隱私保護。

### 檔案管理與實用工具

- [Material Files](https://github.com/zhanghai/MaterialFiles) - Android 上的 Material Design 檔案管理器。
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Android 上的現代化 F-Droid 客戶端。
- [Obtainium](https://github.com/ImranR98/Obtainium) - 直接從 GitHub 和其他來源取得應用更新。
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - Android 系統清理和維護工具。
- [Termux](https://github.com/termux/termux-app) - Android 終端機模擬器和 Linux 環境。

### 啟動器與個人化

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - 注重搜尋和效率的啟動器。
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - 受 Pixel 啟發的可自訂 Android 啟動器。
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - Lawnchair 的分支，增強自訂功能。

### 多媒體與音樂

- [Auxio](https://github.com/OxygenCobalt/Auxio) - 注重簡單性和效能的本地 Android 音樂播放器。
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - 受 Material You 啟發的 Android 本地音樂播放器。
- [InnerTune](https://github.com/z-huang/InnerTune) - Android 上的現代化 YouTube Music 客戶端。
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - 功能豐富的 Android YouTube Music 客戶端，支援離線播放、同步歌詞和 Material 3 設計。
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - 注重隱私的 Android 音樂播放器，使用 Material 3 構建。
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - 具有現代 UI 的時尚 Android 音樂播放器。
- [RiMusic](https://github.com/fast4x/RiMusic) - 由 YouTube Music 驅動的精美 Android 音樂播放器。
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - 用於管理個人音樂庫的開源行動伴侶。
- [Symphony](https://github.com/zyrouge/symphony) - 優雅輕量的 Flutter 音樂播放器。
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - Android 上的輕量級開源音樂串流應用。
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - Phonograph 的分支，提供經典 Android 音樂播放器體驗。

### 通訊與訊息

- [Briar](https://github.com/briar/briar) - 點對點加密訊息應用。
- [Element](https://github.com/element-hq/element-android) - 基於 Matrix 的安全訊息應用。
- [FairEmail](https://github.com/M66B/FairEmail) - 注重隱私的郵件客戶端，支援豐富的自訂選項。
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - Android 上的開源郵件客戶端。
- [Molly](https://github.com/mollyim/mollyim-android) - 加固的 Signal 分支，增強 Android 安全性。
- [Session](https://github.com/session-foundation/session-android) - 注重隱私的加密通訊應用，無需電話號碼。

### 密碼管理器與安全

- [Aegis](https://github.com/beemdevelopment/Aegis) - 安全的雙因素認證應用。
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - 支援備份的雙因素認證應用。
- [Bitwarden](https://github.com/bitwarden/android) - Android 上的開源密碼管理器。
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - 相容於 KeePass 的密碼管理器。
- [Proton Pass](https://github.com/protonpass/android-pass) - 由 Proton 開發的密碼管理器。

### 效率與筆記

- [Joplin](https://github.com/laurent22/joplin) - 支援同步的筆記和任務管理應用。
- [Logseq](https://github.com/logseq/logseq) - 知識管理和大綱應用。
- [Markor](https://github.com/gsantner/markor) - Android 上的 Markdown 編輯器和筆記應用。
- [NoteGen](https://github.com/codexu/note-gen) - 本地優先的 Markdown 筆記應用，支援擷取、編輯、可選同步和 AI 輔助整理。
- [Notesnook](https://github.com/streetwriters/notesnook) - 注重隱私的加密筆記應用。
- [Quillpad](https://github.com/quillpad/quillpad) - 極簡的 Material You 筆記應用。
- [Standard Notes](https://github.com/standardnotes/app) - 端到端加密的筆記應用。
- [Tasks.org](https://github.com/tasks/tasks) - Android 上的開源任務管理應用。

### 視訊與串流

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - 從 Mihon 分支而來的動漫串流和漫畫閱讀器。
- [Grayjay](https://github.com/futo-org/grayjay-android) - 支援多種內容來源的統一媒體平台。
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - Jellyfin 媒體伺服器的 Android 客戶端。
- [LibreTube](https://github.com/libre-tube/LibreTube) - 使用 Piped 的注重隱私的 YouTube 客戶端。
- [Mihon](https://github.com/mihonapp/mihon) - Android 上的開源漫畫閱讀器。
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - 不依賴 Google 的 Android 輕量級 YouTube 前端。
- [Seal](https://github.com/JunkFood02/Seal) - 由 yt-dlp 驅動的視訊和音訊下載器。

## 安全

### 容器與 Kubernetes 安全

- [Chainguard Images](https://github.com/chainguard-images/images) - 注重供應鏈安全的最小化加固容器映像。
- [Dockle](https://github.com/goodwithtech/dockle) - 注重安全最佳實踐的容器映像 Linter。
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - CIS Kubernetes 基準合規檢查器。
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Kubernetes 滲透測試和安全稽核工具。
- [Kubescape](https://github.com/kubescape/kubescape) - 用於風險分析和合規掃描的 Kubernetes 安全平台。
- [Kyverno](https://github.com/kyverno/kyverno) - Kubernetes 原生策略引擎，用於安全、治理和合規。

### 端點與運行時安全

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - 用於偵測 Unix 系統 rootkit 的工具集。
- [Lynis](https://github.com/CISOfy/lynis) - 用於 Unix 系統的安全稽核和加固工具。
- [OpenEDR](https://github.com/ComodoSecurity/openedr) - 端點偵測與回應平台，用於監控和威脅分析。
- [Osquery](https://github.com/osquery/osquery) - 透過 SQL 暴露系統資料的作業系統偵測框架。
- [Wazero](https://github.com/tetratelabs/wazero) - 用於沙箱應用執行的安全 WebAssembly 運行時。

### 網路安全與監控

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - 協作式 IPS 和威脅情報平台，保護伺服器和應用。
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - 用於入侵偵測、企業安全監控和日誌管理的 Linux 發行版。
- [Snort](https://github.com/snort3/snort3) - 廣泛使用的開源入侵防禦和偵測系統。
- [Suricata](https://github.com/OISF/suricata) - 高效能網路 IDS、IPS 和網路安全監控引擎。
- [Wazuh](https://github.com/wazuh/wazuh) - 用於威脅偵測和合規的開源 XDR 和 SIEM 平台。
- [Zeek](https://github.com/zeek/zeek) - 用於監控和安全可視性的強大網路分析框架。

### 隱私與匿名

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - 注重隱私和安全的加固 Firefox 設定。
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - 注重隱私和安全的基於 Android 的行動作業系統。
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Linux 上的應用防火牆和出站連線監控器。
- [Tor](https://github.com/torproject/tor) - 用於保護隱私和抵抗監控的匿名覆蓋網路。

### 逆向工程與滲透測試

- [Amass](https://github.com/owasp-amass/amass) - 攻擊面對應和外部資產發現工具。
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - 由 NSA 開發的軟體逆向工程套件。
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - 用於安全稽核和漏洞利用開發的滲透測試框架。
- [Nmap](https://github.com/nmap/nmap) - 網路發現和安全稽核工具。
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - 由 OWASP 維護的開源 Web 應用安全掃描器。
- [Responder](https://github.com/lgandx/Responder) - LLMNR、NBT-NS 和 MDNS 投毒工具，常用於內網評估。
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - 自動化 SQL 注入和資料庫接管工具。
- [Wireshark](https://github.com/wireshark/wireshark) - 用於故障排除和封包檢查的網路協定分析器。
- [Hetty](https://github.com/dstotijn/hetty) - 允許修改封包的開源代理。

### 密鑰管理與加密

- [age](https://github.com/FiloSottile/age) - 簡單、現代、安全的檔案加密工具。
- [Cryptomator](https://github.com/cryptomator/cryptomator) - 注重隱私的客戶端加密雲端儲存解決方案。
- [HashiCorp Vault](https://github.com/hashicorp/vault) - 用於保護敏感基礎設施資料的密鑰管理和加密平台。
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Kubernetes 控制器，用於在 Git 儲存庫中安全管理加密密鑰。
- [SOPS](https://github.com/getsops/sops) - 用於加密和管理結構化設定檔和密鑰的工具。

### 漏洞掃描與分析

- [Clair](https://github.com/quay/clair) - 用於識別容器映像漏洞的靜態分析工具。
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - 用於 SBOM 分析和漏洞追蹤的軟體供應鏈安全平台。
- [Grype](https://github.com/anchore/grype) - 容器映像和檔案系統的漏洞掃描器。
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - 實現 SCAP 標準的安全合規和漏洞掃描框架。
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - 用於偵測軟體專案中存在漏洞的相依套件的工具。
- [Semgrep](https://github.com/semgrep/semgrep) - 用於在原始碼中發現安全問題的靜態分析工具。

## 自架設

### 開發平台與 Git 服務

- [Gitea](https://github.com/go-gitea/gitea) - 簡單、輕量的自架設 Git 服務。
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - 具有原始碼管理和 CI/CD 功能的完整 DevOps 平台。
- [Onedev](https://github.com/theonedev/onedev) - 整合 CI/CD 和問題追蹤的一體化 Git 伺服器。

### DNS、網路與隱私

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - 支援廣告和追蹤器封鎖的自架設 DNS 伺服器。
- [Headscale](https://github.com/juanfont/headscale) - 相容於 Tailscale 客戶端的開源自架設協調伺服器。
- [NetBird](https://github.com/netbirdio/netbird) - 基於 WireGuard 的安全網路平台，用於私有連線。
- [Pi-hole](https://github.com/pi-hole/pi-hole) - 全網廣告封鎖器和 DNS 黑洞，提升隱私保護。
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - 支援現代協定的強大開源 DNS 伺服器。

### Homelab 與伺服器管理

- [CapRover](https://github.com/caprover/caprover) - 輕量級自架設 PaaS 平台，使用 Docker 部署 Web 應用。
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) - 簡單易用的個人雲端作業系統，適用於自架設應用。
- [Coolify](https://github.com/coollabsio/coolify) - Heroku、Netlify 和 Vercel 的開源自架設替代方案。
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - 自架設入口網站，在一個介面中管理應用、反向代理和認證。
- [Dokploy](https://github.com/Dokploy/dokploy) - 專為 Docker 和 VPS 環境構建的現代化自架設部署平台。
- [Umbrel](https://github.com/getumbrel/umbrel) - 運行自架設應用和服務的個人伺服器平台。
- [YunoHost](https://github.com/YunoHost/yunohost) - 基於 Debian 的自架設平台，注重簡單性和隱私。

### 媒體伺服器與串流

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - 自架設有聲書和播客伺服器，支援現代應用和中繼資料。
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - 自架設網路電台管理套件。
- [Jellyfin](https://github.com/jellyfin/jellyfin) - 完全開源的媒體伺服器，用於電影、電視劇、音樂和直播電視。
- [Navidrome](https://github.com/navidrome/navidrome) - 相容於 Subsonic 客戶端的輕量級自架設音樂串流伺服器。
- [Owncast](https://github.com/owncast/owncast) - 支援聊天和聯邦功能的自架設直播伺服器。
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - 自架設 YouTube 媒體伺服器和視訊歸檔平台。

### 監控與可用性

- [Beszel](https://github.com/henrygd/beszel) - 支援 Docker 的輕量級伺服器監控平台。
- [Checkmk](https://github.com/Checkmk/checkmk) - 面向伺服器、容器和網路的全面 IT 監控解決方案。
- [Netdata](https://github.com/netdata/netdata) - 即時基礎設施監控和故障排除平台。
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - 自架設可用性監控工具，支援狀態頁面和通知。

### 密碼管理器與認證

- [Authentik](https://github.com/goauthentik/authentik) - 自架設的身份提供者和認證平台。
- [Kanidm](https://github.com/kanidm/kanidm) - 注重安全性和簡單性的現代化身份管理伺服器。
- [LLDAP](https://github.com/lldap/lldap) - 適用於小團隊和家庭實驗室的輕量級 LDAP 伺服器。
- [Passbolt](https://github.com/passbolt/passbolt_api) - 為團隊協作設計的開源密碼管理器。
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - 使用 Rust 編寫的輕量級 Bitwarden 相容密碼管理器伺服器。

### 照片與檔案管理

- [File Browser](https://github.com/filebrowser/filebrowser) - 基於 Web 的檔案管理器，用於管理遠端伺服器上的檔案。
- [Immich](https://github.com/immich-app/immich) - 受 Google Photos 啟發的高效能自架設照片和視訊備份解決方案。
- [PhotoPrism](https://github.com/photoprism/photoprism) - AI 驅動的自架設照片管理應用。
- [Piwigo](https://github.com/Piwigo/Piwigo) - 支援外掛程式的開源照片畫廊平台。
- [Syncthing](https://github.com/syncthing/syncthing) - 去中心化的持續檔案同步應用。

### RSS、稍後閱讀與知識

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - 輕量級自架設 RSS 訂閱聚合器。
- [Hoarder](https://github.com/hoarder-app/hoarder) - 支援 AI 輔助整理的自架設書籤管理器。
- [Karakeep](https://github.com/karakeep-app/karakeep) - 現代化的自架設書籤和知識管理平台。
- [Miniflux](https://github.com/miniflux/v2) - 注重效能和簡單性的極簡 RSS 閱讀器。
- [Wallabag](https://github.com/wallabag/wallabag) - 自架設稍後閱讀應用，用於儲存網頁文章。

## 軟體 / SaaS

### 分析與監控

- [OpenReplay](https://github.com/openreplay/openreplay) - 工作階段回放和產品分析平台，用於除錯使用者問題。
- [Plausible Analytics](https://github.com/plausible/analytics) - 輕量級且注重隱私的網站分析平台。
- [Signoz](https://github.com/SigNoz/signoz) - 用於指標、追蹤和日誌的開源可觀測性平台。
- [Umami](https://github.com/umami-software/umami) - 注重隱私的 Google Analytics 替代方案。

### 自動化與內部工具

- [Appsmith](https://github.com/appsmithorg/appsmith) - 用於快速建立內部應用的開源框架。
- [Budibase](https://github.com/Budibase/budibase) - 低程式碼平台，用於內部工具、表單和營運儀表板。
- [n8n](https://github.com/n8n-io/n8n) - 支援自架設和可擴充整合的工作流程自動化平台。
- [ToolJet](https://github.com/ToolJet/ToolJet) - 低程式碼平台，用於構建內部工具和管理面板。

### 通訊與支援

- [Chatwoot](https://github.com/chatwoot/chatwoot) - 客戶互動和支援平台，支援即時聊天和全通路收件匣。
- [Formbricks](https://github.com/formbricks/formbricks) - 開源體驗管理和產品回饋平台。
- [Papercups](https://github.com/papercups-io/papercups) - 開源即時聊天和客戶訊息平台。
- [Typebot](https://github.com/baptisteArNo/typebot.io) - 對話式表單建立器，用於建立互動式聊天風格工作流程。

### 文件與知識庫

- [Docs](https://github.com/suitenumerique/docs) - 注重隱私和自架設的協作文件編輯平台。
- [Documenso](https://github.com/documenso/documenso) - 作為 DocuSign 替代方案的開源文件簽署平台。
- [Outline](https://github.com/outline/outline) - 團隊協作知識庫和文件平台。
- [Wiki.js](https://github.com/requarks/wiki) - 功能強大且可擴充的開源 Wiki 平台。

### 檔案儲存與雲端

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - 支援多種儲存供應商的自架設雲端儲存系統。
- [Filestash](https://github.com/mickael-kerjean/filestash) - 用於管理多種儲存後端檔案的現代化 Web 客戶端。
- [Nextcloud](https://github.com/nextcloud/server) - 自架設效率雲端，支援檔案同步、協作和通訊工具。
- [Seafile](https://github.com/haiwen/seafile) - 高效能的開源檔案託管和同步平台。

### 效率與協作

- [AFFiNE](https://github.com/toeverything/AFFiNE) - 結合文件、白板和資料庫的一體化協作工作區。
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - 作為 Notion 替代方案的開源工作區和知識管理平台。
- [Erxes](https://github.com/erxes/erxes) - 開源成長行銷、銷售和客戶互動平台。
- [Focalboard](https://github.com/mattermost/focalboard) - 受 Trello 和 Notion 啟發的自架設專案和任務管理工具。
- [Plane](https://github.com/makeplane/plane) - 開源專案管理和問題追蹤平台。
- [Twenty](https://github.com/twentyhq/twenty) - 注重可擴充性和所有權的現代化開源 CRM 平台。

## Web 開發

### Angular UI 函式庫

- [Angular Material](https://github.com/angular/components) - Google 維護的 Angular Material Design 元件函式庫。
- [PrimeNG](https://github.com/primefaces/primeng) - 高效能、支援豐富自訂選項的 Angular UI 元件函式庫。
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - 功能強大的開源 Angular UI 套件，提供豐富的元件和工具。
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - 使用 Tailwind CSS 構建的開源 Angular 管理面板範本。

### 程式碼編輯器

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - 用於雲端和桌面環境的靈活開源 IDE 平台。
- [Helix](https://github.com/helix-editor/helix) - 快速發展的模態編輯器，內建 LSP 支援和現代化預設配置。
- [Neovim](https://github.com/neovim/neovim) - 高度流行、可擴充的基於 Vim 的編輯器，注重效能和現代化工作流程。
- [Visual Studio Code](https://github.com/microsoft/vscode) - 使用最廣泛的開源程式碼編輯器，擁有龐大的擴充套件生態系統。
- [VSCodium](https://github.com/VSCodium/vscodium) - 不含專有元件的完全開源 VS Code 發行版。
- [Zed](https://github.com/zed-industries/zed) - 快速獲得採用的高效能協作編輯器。

### 設計工具

- [Excalidraw](https://github.com/excalidraw/excalidraw) - 用於繪製手繪風格圖表的虛擬白板，支援即時協作和無限畫布。
- [Open Design](https://github.com/nexu-io/open-design) - 本地優先的 AI 設計工具，提供 19 種技能和 71 個品牌級設計系統，用於生成 Web、行動端和簡報制品。
- [open-pencil](https://github.com/open-pencil/open-pencil) - AI 原生的 Figma 相容設計編輯器，支援無頭 CLI、MCP 伺服器和設計到程式碼匯出。

### 圖示

- [Bootstrap Icons](https://github.com/twbs/icons) - Bootstrap 官方圖示函式庫。
- [Boxicons](https://github.com/atisawd/boxicons) - 簡單靈活的圖示函式庫。
- [css.gg](https://github.com/astrit/css.gg) - 開源 CSS 和 SVG 圖示系統。
- [Feather Icons](https://github.com/feathericons/feather) - 極簡的開源圖示。
- [Heroicons](https://github.com/tailwindlabs/heroicons) - Tailwind CSS 官方圖示集（外框和實心）。
- [Ionicons](https://github.com/ionic-team/ionicons) - 適用於 Ionic 和通用場景的圖示包。
- [Lucide Animated](https://github.com/pqoqubbw/icons) - 使用 Motion 和 Lucide 構建的精美動畫 React 圖示集合。
- [React Icons](https://github.com/react-icons/react-icons) - 作為 React 元件的流行圖示包。
- [Morphicons](https://github.com/guillermolg00/morphicons) - 採用彈簧物理效果的通用圖示變形函式庫，用於描邊圖示之間的動畫過渡。
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - 系統風格的開源圖示函式庫。
- [Simple Icons](https://github.com/simple-icons/simple-icons) - SVG 格式的品牌和 Logo 圖示。
- [Tabler Icons](https://github.com/tabler/tabler-icons) - 大量、一致且活躍維護的圖示集。

### React UI 函式庫

- [Ant Design](https://github.com/ant-design/ant-design) - 具有健壯一致 React 元件的企業級設計系統。
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - 注重無障礙性和出色開發者體驗的模組化函式庫。
- [Material-UI (MUI)](https://github.com/mui/material-ui) - 基於 Material Design 的 React 元件函式庫，高度可自訂且被廣泛採用。
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - 用於在行動端和 Web 上構建一致 UI 的實用優先元件系統。
- [PrimeReact](https://github.com/primefaces/primereact) - 豐富的、靈活的、設計無關的 React UI 元件完整套件。
- [Streamdown](https://github.com/vercel/streamdown) - 支援串流 AI 生成內容的 React Markdown 渲染元件。
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - 為 React 重建的 Bootstrap 元件，不依賴 jQuery。
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - Semantic UI 的官方 React 整合，提供宣告式元件。

### UI 元件

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - 復古 8 位元風格的開源 UI 元件函式庫。
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - 可重用的 Dotmatrix 風格載入動畫元件，可透過 shadcn 登錄檔或手動複製安裝。
- [Flowbite](https://github.com/themesberg/flowbite) - 基於 Tailwind CSS 的開源 UI 元件函式庫，包含互動元素。
- [Headless UI](https://github.com/tailwindlabs/headlessui) - 專為 Tailwind CSS 設計的完全可存取的無樣式 UI 原語。
- [LangUI](https://github.com/CommandCodeAI/langui) - 用於 AI 和 GPT 風格介面的開源 Tailwind CSS 元件。
- [loading-ui](https://github.com/turbostarter/loading-ui) - 專為使用 Tailwind CSS 的現代 React 應用打造的精美開源載入狀態、骨架螢幕和動畫佔位符。
- [shadcn/ui](https://github.com/shadcn-ui/ui) - 可複製貼上的開源 React UI 元件，基於 Tailwind CSS 構建。
- [uiverse](https://github.com/uiverse-io/galaxy) - 社群驅動的開源 UI 元素，使用 HTML 和 CSS 構建。

### Vue UI 函式庫

- [Quasar](https://github.com/quasarframework/quasar) - 功能齊全的 Vue 框架，用於構建 SPA、SSR、行動端和桌面應用。
- [Vuetify](https://github.com/vuetifyjs/vuetify) - 擁有龐大生態系統的 Vue Material Design 元件框架。

## 貢獻

歡迎貢獻！如果你想參與貢獻：

1. Fork 本儲存庫並建立新分支：`feat/project-name`
2. 將你的條目新增到 `README.md` 的相應部分，遵循以下格式。
3. 推送到分支（`git push origin feat/project-name`）
4. 建立 Pull Request，標題類似 `feat: Project Name`，並簡要說明其所屬原因。

更多資訊請參閱我們的[貢獻指南](CONTRIBUTING.md)。

- ❤️ 感謝你對專案的貢獻！你的幫助非常寶貴。

<div align="center">
  
  <h3>貢獻者</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
