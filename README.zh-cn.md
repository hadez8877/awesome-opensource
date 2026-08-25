<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    一个真正<strong>开源资源</strong>的集合 &mdash;
    <br/>
    因为我也厌倦了那些并非真正开源的项目。
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
    <a href="README.br.md">Português (Brasil)</a>
  </p>
</div>

## 目录

| 类别            | 描述                                                                                                                                                              | 快速跳转                         |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Backend / BaaS  | 后端服务、API、认证和 Backend-as-a-Service 的工具与平台，如 Firebase、Supabase 以及适用于 Node.js 和其他运行时的框架。                                             | [点击查看](#backend--baas)      |
| CLI 工具        | 提升效率、文件管理、系统监控、现代化 Shell 和日常开发工作流自动化的命令行工具。                                                                                    | [点击查看](#cli-工具)           |
| 数据库          | 适用于不同场景和扩展需求的关系型、NoSQL、图、搜索、向量和时序数据库系统。                                                                                          | [点击查看](#数据库)             |
| DevOps          | 现代云部署的基础设施即代码、Kubernetes 编排、CI/CD、监控、网络和安全。                                                                                             | [点击查看](#devops)             |
| 移动应用        | 跨平台移动开发的框架和应用，包括浏览器、效率工具、多媒体和通讯应用。                                                                                               | [点击查看](#移动应用)           |
| 安全            | 容器、网络、终端、隐私、逆向工程和漏洞管理的安全工具。                                                                                                            | [点击查看](#安全)               |
| 自托管          | 可以部署在自有基础设施上的软件，包括 Git 平台、DNS、媒体服务器、监控和文件管理。                                                                                   | [点击查看](#自托管)             |
| 软件 / SaaS     | 完整的应用，涵盖分析、自动化、通讯、文档、存储和团队协作。                                                                                                        | [点击查看](#软件--saas)         |
| Web 开发        | 前端和全栈 Web 开发的框架、UI 库、代码编辑器、设计工具和资源。                                                                                                    | [点击查看](#web-开发)           |

## Backend / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - 现代轻量级 GraphQL 服务器。
- [PostgREST](https://github.com/PostgREST/postgrest) - 将 PostgreSQL 即刻转换为 REST API。
- [tRPC](https://github.com/trpc/trpc) - 无需 Schema 的端到端类型安全 API。

### 认证与身份

- [Authelia](https://github.com/authelia/authelia) - 自托管的多因素认证解决方案。
- [Keycloak](https://github.com/keycloak/keycloak) - 功能齐全的开源 IAM 解决方案（SSO、OAuth2、OIDC、SAML），由 Red Hat 支持。
- [Ory Kratos](https://github.com/ory/kratos) - 注重安全的认证系统，核心完全开源。

### Backend as a Service

- [Parse Server](https://github.com/parse-community/parse-server) - 成熟的开源后端，无关键功能闭源。
- [PocketBase](https://github.com/pocketbase/pocketbase) - 内嵌 SQLite、认证和 REST API 的后端，完全开源。
- [Supabase](https://github.com/supabase/supabase) - 基于 PostgreSQL 构建的开源 Firebase 替代方案。
- [UnDB](https://github.com/undb-io/undb) - 自托管的无代码数据库和 BaaS（基于 SQLite，类似 Airtable）。

### 框架

- [AdonisJS](https://github.com/adonisjs/core) - 采用 TypeScript 优先的现代 Node.js 框架。
- [Elysia](https://github.com/elysiajs/elysia) - 高性能的 Bun 优先框架，具有强类型支持。
- [FeathersJS](https://github.com/feathersjs/feathers) - 灵活的框架，适用于 REST 和实时应用。
- [Hono](https://github.com/honojs/hono) - 超快框架，适用于现代运行时（Edge、Bun、Deno、Node）。
- [LoopBack](https://github.com/loopbackio/loopback-next) - 基于 OpenAPI 的高级 API 框架。
- [Midway](https://github.com/midwayjs/midway) - 受 Spring 启发的 Node.js 依赖注入框架。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 快速强大的微服务框架。
- [Wasp](https://github.com/wasp-lang/wasp) - 声明式全栈框架，自动生成后端。

## CLI 工具

### 开发工具

- [bat](https://github.com/sharkdp/bat) - `cat` 的替代品，支持语法高亮和 Git 集成。
- [delta](https://github.com/dandavison/delta) - 支持语法高亮的分页器，用于 Git 和 diff 输出。
- [fd](https://github.com/sharkdp/fd) - 简单、快速、用户友好的 `find` 替代品。
- [httpie](https://github.com/httpie/cli) - 对用户友好的命令行 HTTP 客户端，适用于 API 和 Web 服务。
- [hyperfine](https://github.com/sharkdp/hyperfine) - 带有统计分析功能的命令行基准测试工具。
- [jq](https://github.com/jqlang/jq) - 轻量灵活的终端 JSON 处理器。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Docker 和容器管理的终端 UI。
- [lazygit](https://github.com/jesseduffield/lazygit) - 简单的 Git 操作终端 UI。
- [ripgrep](https://github.com/BurntSushi/ripgrep) - 极速递归搜索工具，遵循 `.gitignore` 规则。
- [xh](https://github.com/ducaale/xh) - 友好快速的 HTTP 客户端，作为 HTTPie 的替代品。
- [yq](https://github.com/mikefarah/yq) - 受 jq 启发的便携式 YAML、JSON、XML 和 TOML 处理器。

### 文件管理与导航

- [broot](https://github.com/Canop/broot) - 带有模糊搜索的交互式目录树导航器。
- [fzf](https://github.com/junegunn/fzf) - 通用命令行模糊查找器。
- [nnn](https://github.com/jarun/nnn) - 轻量且极速的终端文件浏览器。
- [ranger](https://github.com/ranger/ranger) - 带有 Vim 风格快捷键的控制台文件管理器。
- [yazi](https://github.com/sxyazi/yazi) - 用 Rust 编写的极速终端文件管理器。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - 受 z 启发、基于访问频率的更智能的 `cd` 命令。

### 包管理器与运行时

- [asdf](https://github.com/asdf-vm/asdf) - 可扩展的版本管理器，支持多种运行时和工具。
- [Bun](https://github.com/oven-sh/bun) - 快速的 JavaScript 运行时、包管理器和打包器。
- [Deno](https://github.com/denoland/deno) - 使用 Rust 构建的安全 JavaScript 和 TypeScript 运行时。
- [Homebrew](https://github.com/Homebrew/brew) - macOS 和 Linux 上流行的包管理器。
- [pnpm](https://github.com/pnpm/pnpm) - 快速且节省磁盘空间的 JavaScript 包管理器。

### 效率与工作流

- [atuin](https://github.com/atuinsh/atuin) - Shell 历史记录同步和搜索引擎，支持加密存储。
- [Glow](https://github.com/charmbracelet/glow) - 在终端中优美渲染 Markdown 文件。
- [gum](https://github.com/charmbracelet/gum) - 用于构建精美 Shell 脚本和终端工作流的工具。
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - 强大的 CLI 任务管理和效率工具。
- [wtfutil](https://github.com/wtfutil/wtf) - 用于显示开发者信息的个人终端仪表板。

### Shell 与终端环境

- [Fish Shell](https://github.com/fish-shell/fish-shell) - 用户友好的智能 Shell，支持自动建议和现代化默认配置。
- [Nushell](https://github.com/nushell/nushell) - 围绕结构化数据构建的现代化 Shell。
- [tmux](https://github.com/tmux/tmux) - 终端复用器，用于管理持久会话和窗格。
- [Warp](https://github.com/warpdotdev/Warp) - 基于 Rust 的现代化终端，支持 AI 和协作功能。
- [WezTerm](https://github.com/wez/wezterm) - 用 Rust 编写的 GPU 加速跨平台终端模拟器。
- [Zellij](https://github.com/zellij-org/zellij) - 注重易用性和可扩展性的终端工作区和复用器。

### 系统监控与实用工具

- [bottom](https://github.com/ClementTsang/bottom) - 受 htop 启发的跨平台图形化进程和系统监控器。
- [btop](https://github.com/aristocratos/btop) - 适用于 Linux、macOS 和 BSD 的现代化、视觉丰富的资源监控器。
- [dua](https://github.com/Byron/dua-cli) - 带有交互式终端 UI 的快速磁盘使用分析器。
- [dust](https://github.com/bootandy/dust) - 用 Rust 编写的更直观的 `du` 替代品。
- [htop](https://github.com/htop-dev/htop) - 交互式进程查看器和系统监控器。
- [procs](https://github.com/dalance/procs) - `ps` 的现代化替代品，输出支持彩色和结构化显示。

## 数据库

### 图数据库

- [Dgraph](https://github.com/hypermodeinc/dgraph) - 分布式图数据库，提供 GraphQL 原生 API。

### 键值与缓存数据库

- [Apache Ignite](https://github.com/apache/ignite) - 分布式内存数据库和缓存平台。
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - 兼容 Redis 和 Memcached API 的现代化内存数据存储。
- [etcd](https://github.com/etcd-io/etcd) - 用于 Kubernetes 协调和服务发现的分布式键值存储。
- [Valkey](https://github.com/valkey-io/valkey) - 社区驱动的 Redis 分支，专注于完全开源开发。

### NoSQL 数据库

- [ArangoDB](https://github.com/arangodb/arangodb) - 支持图、文档和键值数据模型的多模型数据库。
- [Cassandra](https://github.com/apache/cassandra) - 为高可用性而构建的高度可扩展的宽列数据库。
- [CouchDB](https://github.com/apache/couchdb) - 分布式 JSON 文档数据库，支持复制和离线优先。
- [FerretDB](https://github.com/FerretDB/FerretDB) - 基于 PostgreSQL 构建的开源 MongoDB 替代方案。
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - 支持 changefeed 的实时分布式数据库。

### 关系型数据库

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - 面向分析和可观测性的高性能列式数据库。
- [CockroachDB](https://github.com/cockroachdb/cockroach) - 专注于可扩展性和容错能力的分布式 SQL 数据库。
- [DuckDB](https://github.com/duckdb/duckdb) - 专为快速 OLAP 工作负载设计的进程内分析数据库。
- [FoundationDB](https://github.com/apple/foundationdb) - 专为强一致性设计的分布式事务键值数据库。
- [LibSQL](https://github.com/tursodatabase/libsql) - 专注于分布式和嵌入式工作负载的 SQLite 开源分支。
- [MariaDB](https://github.com/MariaDB/server) - 社区驱动的关系型数据库，从 MySQL 分支而来，具有强大的开源治理。
- [PostgreSQL](https://github.com/postgres/postgres) - 以可靠性、可扩展性和 SQL 合规性著称的高级开源关系型数据库。
- [RisingWave](https://github.com/risingwavelabs/risingwave) - 兼容 PostgreSQL 的分布式 SQL 流数据库。
- [SQLite](https://github.com/sqlite/sqlite) - 轻量级嵌入式关系型数据库，广泛用于应用和移动设备。
- [TiDB](https://github.com/pingcap/tidb) - 兼容 MySQL 的分布式数据库，专为 HTAP 和云原生工作负载设计。
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - 兼容 PostgreSQL 的高性能分布式数据库，适用于可扩展应用。

### 搜索与分析引擎

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - 专为高性能索引和查询设计的全文搜索引擎。
- [Meilisearch](https://github.com/meilisearch/meilisearch) - 快速、对开发者友好的搜索引擎，支持拼写纠错。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - 社区驱动的搜索和分析引擎，从 Elasticsearch 分支而来。
- [Sonic](https://github.com/valeriansaliou/sonic) - 轻量级无 Schema 搜索后端，针对速度优化。
- [Typesense](https://github.com/typesense/typesense) - 专注于简单性和性能的开源即时搜索引擎。

### 时序数据库

- [QuestDB](https://github.com/questdb/questdb) - 专注于快速 SQL 分析的高性能时序数据库。
- [TDengine](https://github.com/taosdata/TDengine) - 专为 IoT、工业和监控数据设计的时序平台。

### 向量数据库

- [Chroma](https://github.com/chroma-core/chroma) - 专为 LLM 应用设计的轻量级嵌入数据库。
- [LanceDB](https://github.com/lancedb/lancedb) - 针对 AI 应用和本地优先工作流优化的嵌入式向量数据库。
- [Milvus](https://github.com/milvus-io/milvus) - 为机器学习嵌入和 AI 工作负载构建的可扩展向量数据库。
- [Qdrant](https://github.com/qdrant/qdrant) - 面向 AI 和语义搜索应用的向量相似度搜索引擎。
- [SurrealDB](https://github.com/surrealdb/surrealdb) - 结合文档、图和关系型功能并支持向量的多模型数据库。
- [Weaviate](https://github.com/weaviate/weaviate) - 支持 GraphQL 和 AI 原生能力的开源向量搜索引擎。

## DevOps

### 容器与虚拟化

- [containerd](https://github.com/containerd/containerd) - Kubernetes 和 Docker 使用的高性能容器运行时。
- [CRI-O](https://github.com/cri-o/cri-o) - Kubernetes 原生容器运行时，实现 CRI 标准。
- [Incus](https://github.com/lxc/incus) - 从 LXD 分支而来的社区驱动的现代化容器和虚拟机管理器。
- [LXC](https://github.com/lxc/lxc) - 轻量级 Linux 容器运行时，支持低级系统容器。
- [Podman](https://github.com/containers/podman) - 注重安全和 OCI 兼容性的无守护进程容器引擎。

### Kubernetes 与编排

- [Argo CD](https://github.com/argoproj/argo-cd) - Kubernetes 的声明式 GitOps 持续交付工具。
- [Flux](https://github.com/fluxcd/flux2) - GitOps 工具包，用于保持 Kubernetes 集群与 Git 仓库同步。
- [Helm](https://github.com/helm/helm) - Kubernetes 应用的包管理器。
- [k3s](https://github.com/k3s-io/k3s) - 针对边缘和 IoT 工作负载优化的轻量级 Kubernetes 发行版。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - 领先的开源容器编排平台。
- [Rancher](https://github.com/rancher/rancher) - 用于多集群操作的 Kubernetes 管理平台。

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - 基于容器的持续集成系统，支持声明式流水线。
- [GoCD](https://github.com/gocd/gocd) - 专注于复杂工作流的开源持续交付服务器。
- [Jenkins](https://github.com/jenkinsci/jenkins) - 可扩展的 CI/CD 流水线自动化服务器。
- [Tekton](https://github.com/tektoncd/pipeline) - Kubernetes 原生的 CI/CD 系统创建框架。
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - 受 Drone 启发的轻量级全开源 CI/CD 系统。

### 基础设施即代码

- [Ansible](https://github.com/ansible/ansible) - 无代理自动化工具，用于配置管理和供应。
- [Atlantis](https://github.com/runatlantis/atlantis) - Terraform 和 OpenTofu 项目的 GitOps 工作流自动化。
- [Crossplane](https://github.com/crossplane/crossplane) - 基于 Kubernetes 的云基础设施控制平面框架。
- [OpenTofu](https://github.com/opentofu/opentofu) - 从 Terraform 分支而来的社区驱动基础设施即代码工具。
- [Pulumi](https://github.com/pulumi/pulumi) - 使用熟悉编程语言的基础设施即代码平台。

### 监控与可观测性

- [Jaeger](https://github.com/jaegertracing/jaeger) - 用于微服务监控的分布式追踪平台。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - 遥测数据采集的开放标准和工具。
- [Prometheus](https://github.com/prometheus/prometheus) - 专为可靠性和可扩展性设计的监控和告警工具包。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 高性能时序数据库和监控套件。

### 网络与反向代理

- [Caddy](https://github.com/caddyserver/caddy) - 支持自动 HTTPS 和简单配置的 Web 服务器。
- [CoreDNS](https://github.com/coredns/coredns) - 灵活可扩展的 DNS 服务器，常用于 Kubernetes。
- [HAProxy](https://github.com/haproxy/haproxy) - 可靠的高可用负载均衡器和代理服务器。
- [Nginx](https://github.com/nginx/nginx) - 高性能 Web 服务器和反向代理。
- [Traefik](https://github.com/traefik/traefik) - 支持自动服务发现的现代化反向代理和 Ingress 控制器。

### 密钥与安全

- [Falco](https://github.com/falcosecurity/falco) - 容器和 Kubernetes 的运行时安全监控。
- [Infisical](https://github.com/Infisical/infisical) - 面向团队和基础设施的开源密钥管理平台。
- [Step CA](https://github.com/smallstep/certificates) - 私有证书颁发机构和自动化 TLS 管理解决方案。
- [Trivy](https://github.com/aquasecurity/trivy) - 容器、依赖项、Kubernetes 和 IaC 的安全扫描器。

## 移动应用

### 浏览器与互联网

- [Cromite](https://github.com/uazo/cromite) - 注重隐私的 Chromium 分支，支持广告拦截。
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - Mozilla 开发的开源移动浏览器。
- [Fulguris](https://github.com/Slion/Fulguris) - 注重隐私的轻量级 Android 浏览器。
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - Android 上的开源 Reddit 客户端。
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - 加固的 Firefox 分支，增强 Android 隐私保护。

### 文件管理与实用工具

- [Material Files](https://github.com/zhanghai/MaterialFiles) - Android 上的 Material Design 文件管理器。
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Android 上的现代化 F-Droid 客户端。
- [Obtainium](https://github.com/ImranR98/Obtainium) - 直接从 GitHub 和其他来源获取应用更新。
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - Android 系统清理和维护工具。
- [Termux](https://github.com/termux/termux-app) - Android 终端模拟器和 Linux 环境。

### 启动器与个性化

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - 注重搜索和效率的启动器。
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - 受 Pixel 启发的可自定义 Android 启动器。
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - Lawnchair 的分支，增强自定义功能。

### 多媒体与音乐

- [Auxio](https://github.com/OxygenCobalt/Auxio) - 注重简单性和性能的本地 Android 音乐播放器。
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - 受 Material You 启发的 Android 本地音乐播放器。
- [InnerTune](https://github.com/z-huang/InnerTune) - Android 上的现代化 YouTube Music 客户端。
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - 功能丰富的 Android YouTube Music 客户端，支持离线播放、同步歌词和 Material 3 设计。
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - 注重隐私的 Android 音乐播放器，使用 Material 3 构建。
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - 具有现代 UI 的时尚 Android 音乐播放器。
- [RiMusic](https://github.com/fast4x/RiMusic) - 由 YouTube Music 驱动的精美 Android 音乐播放器。
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - 用于管理个人音乐库的开源移动伴侣。
- [Symphony](https://github.com/zyrouge/symphony) - 优雅轻量的 Flutter 音乐播放器。
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - Android 上的轻量级开源音乐流媒体应用。
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - Phonograph 的分支，提供经典 Android 音乐播放器体验。

### 通讯与消息

- [Briar](https://github.com/briar/briar) - 点对点加密消息应用。
- [Element](https://github.com/element-hq/element-android) - 基于 Matrix 的安全消息应用。
- [FairEmail](https://github.com/M66B/FairEmail) - 注重隐私的邮件客户端，支持丰富的自定义选项。
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - Android 上的开源邮件客户端。
- [Molly](https://github.com/mollyim/mollyim-android) - 加固的 Signal 分支，增强 Android 安全性。
- [Session](https://github.com/session-foundation/session-android) - 注重隐私的加密通讯应用，无需电话号码。

### 密码管理器与安全

- [Aegis](https://github.com/beemdevelopment/Aegis) - 安全的双因素认证应用。
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - 支持备份的双因素认证应用。
- [Bitwarden](https://github.com/bitwarden/android) - Android 上的开源密码管理器。
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - 兼容 KeePass 的密码管理器。
- [Proton Pass](https://github.com/protonpass/android-pass) - 由 Proton 开发的密码管理器。

### 效率与笔记

- [Joplin](https://github.com/laurent22/joplin) - 支持同步的笔记和任务管理应用。
- [Logseq](https://github.com/logseq/logseq) - 知识管理和大纲应用。
- [Markor](https://github.com/gsantner/markor) - Android 上的 Markdown 编辑器和笔记应用。
- [NoteGen](https://github.com/codexu/note-gen) - 本地优先的 Markdown 笔记应用，支持捕获、编辑、可选同步和 AI 辅助整理。
- [Notesnook](https://github.com/streetwriters/notesnook) - 注重隐私的加密笔记应用。
- [Quillpad](https://github.com/quillpad/quillpad) - 极简的 Material You 笔记应用。
- [Standard Notes](https://github.com/standardnotes/app) - 端到端加密的笔记应用。
- [Tasks.org](https://github.com/tasks/tasks) - Android 上的开源任务管理应用。

### 视频与流媒体

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - 从 Mihon 分支而来的动漫流媒体和漫画阅读器。
- [Grayjay](https://github.com/futo-org/grayjay-android) - 支持多种内容来源的统一媒体平台。
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - Jellyfin 媒体服务器的 Android 客户端。
- [LibreTube](https://github.com/libre-tube/LibreTube) - 使用 Piped 的注重隐私的 YouTube 客户端。
- [Mihon](https://github.com/mihonapp/mihon) - Android 上的开源漫画阅读器。
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - 不依赖 Google 的 Android 轻量级 YouTube 前端。
- [Seal](https://github.com/JunkFood02/Seal) - 由 yt-dlp 驱动的视频和音频下载器。

## 安全

### 容器与 Kubernetes 安全

- [Chainguard Images](https://github.com/chainguard-images/images) - 注重供应链安全的最小化加固容器镜像。
- [Dockle](https://github.com/goodwithtech/dockle) - 注重安全最佳实践的容器镜像 Linter。
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - CIS Kubernetes 基准合规检查器。
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Kubernetes 渗透测试和安全审计工具。
- [Kubescape](https://github.com/kubescape/kubescape) - 用于风险分析和合规扫描的 Kubernetes 安全平台。
- [Kyverno](https://github.com/kyverno/kyverno) - Kubernetes 原生策略引擎，用于安全、治理和合规。

### 终端与运行时安全

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - 用于检测 Unix 系统 rootkit 的工具集。
- [Lynis](https://github.com/CISOfy/lynis) - 用于 Unix 系统的安全审计和加固工具。
- [OpenEDR](https://github.com/ComodoSecurity/openedr) - 终端检测与响应平台，用于监控和威胁分析。
- [Osquery](https://github.com/osquery/osquery) - 通过 SQL 暴露系统数据的操作系统检测框架。
- [Wazero](https://github.com/tetratelabs/wazero) - 用于沙箱应用执行的安全 WebAssembly 运行时。

### 网络安全与监控

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - 协作式 IPS 和威胁情报平台，保护服务器和应用。
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - 用于入侵检测、企业安全监控和日志管理的 Linux 发行版。
- [Snort](https://github.com/snort3/snort3) - 广泛使用的开源入侵防御和检测系统。
- [Suricata](https://github.com/OISF/suricata) - 高性能网络 IDS、IPS 和网络安全监控引擎。
- [Wazuh](https://github.com/wazuh/wazuh) - 用于威胁检测和合规的开源 XDR 和 SIEM 平台。
- [Zeek](https://github.com/zeek/zeek) - 用于监控和安全可见性的强大网络分析框架。

### 隐私与匿名

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - 注重隐私和安全的加固 Firefox 配置。
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - 注重隐私和安全的基于 Android 的移动操作系统。
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Linux 上的应用防火墙和出站连接监控器。
- [Tor](https://github.com/torproject/tor) - 用于保护隐私和抵抗监控的匿名覆盖网络。

### 逆向工程与渗透测试

- [Amass](https://github.com/owasp-amass/amass) - 攻击面映射和外部资产发现工具。
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - 由 NSA 开发的软件逆向工程套件。
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - 用于安全审计和漏洞利用开发的渗透测试框架。
- [Nmap](https://github.com/nmap/nmap) - 网络发现和安全审计工具。
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - 由 OWASP 维护的开源 Web 应用安全扫描器。
- [Responder](https://github.com/lgandx/Responder) - LLMNR、NBT-NS 和 MDNS 投毒工具，常用于内网评估。
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - 自动化 SQL 注入和数据库接管工具。
- [Wireshark](https://github.com/wireshark/wireshark) - 用于故障排除和数据包检查的网络协议分析器。
- [Hetty](https://github.com/dstotijn/hetty) - 允许修改数据包的开源代理。

### 密钥管理与加密

- [age](https://github.com/FiloSottile/age) - 简单、现代、安全的文件加密工具。
- [Cryptomator](https://github.com/cryptomator/cryptomator) - 注重隐私的客户端加密云存储解决方案。
- [HashiCorp Vault](https://github.com/hashicorp/vault) - 用于保护敏感基础设施数据的密钥管理和加密平台。
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Kubernetes 控制器，用于在 Git 仓库中安全管理加密密钥。
- [SOPS](https://github.com/getsops/sops) - 用于加密和管理结构化配置文件和密钥的工具。

### 漏洞扫描与分析

- [Clair](https://github.com/quay/clair) - 用于识别容器镜像漏洞的静态分析工具。
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - 用于 SBOM 分析和漏洞追踪的软件供应链安全平台。
- [Grype](https://github.com/anchore/grype) - 容器镜像和文件系统的漏洞扫描器。
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - 实现 SCAP 标准的安全合规和漏洞扫描框架。
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - 用于检测软件项目中存在漏洞的依赖项的工具。
- [Semgrep](https://github.com/semgrep/semgrep) - 用于在源代码中发现安全问题的静态分析工具。

## 自托管

### 开发平台与 Git 服务

- [Gitea](https://github.com/go-gitea/gitea) - 简单、轻量的自托管 Git 服务。
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - 具有源代码管理和 CI/CD 功能的完整 DevOps 平台。
- [Onedev](https://github.com/theonedev/onedev) - 集成 CI/CD 和问题跟踪的一体化 Git 服务器。

### DNS、网络与隐私

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - 支持广告和跟踪器拦截的自托管 DNS 服务器。
- [Headscale](https://github.com/juanfont/headscale) - 兼容 Tailscale 客户端的开源自托管协调服务器。
- [NetBird](https://github.com/netbirdio/netbird) - 基于 WireGuard 的安全网络平台，用于私有连接。
- [Pi-hole](https://github.com/pi-hole/pi-hole) - 全网广告拦截器和 DNS 黑洞，提升隐私保护。
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - 支持现代协议的强大开源 DNS 服务器。

### Homelab 与服务器管理

- [CapRover](https://github.com/caprover/caprover) - 轻量级自托管 PaaS 平台，使用 Docker 部署 Web 应用。
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) - 简单易用的个人云操作系统，适用于自托管应用。
- [Coolify](https://github.com/coollabsio/coolify) - Heroku、Netlify 和 Vercel 的开源自托管替代方案。
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - 自托管门户，在一个界面中管理应用、反向代理和认证。
- [Dokploy](https://github.com/Dokploy/dokploy) - 专为 Docker 和 VPS 环境构建的现代化自托管部署平台。
- [Umbrel](https://github.com/getumbrel/umbrel) - 运行自托管应用和服务的个人服务器平台。
- [YunoHost](https://github.com/YunoHost/yunohost) - 基于 Debian 的自托管平台，注重简单性和隐私。

### 媒体服务器与流媒体

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - 自托管有声书和播客服务器，支持现代应用和元数据。
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - 自托管网络电台管理套件。
- [Jellyfin](https://github.com/jellyfin/jellyfin) - 完全开源的媒体服务器，用于电影、电视剧、音乐和直播电视。
- [Navidrome](https://github.com/navidrome/navidrome) - 兼容 Subsonic 客户端的轻量级自托管音乐流媒体服务器。
- [Owncast](https://github.com/owncast/owncast) - 支持聊天和联邦功能的自托管直播服务器。
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - 自托管 YouTube 媒体服务器和视频归档平台。

### 监控与可用性

- [Beszel](https://github.com/henrygd/beszel) - 支持 Docker 的轻量级服务器监控平台。
- [Checkmk](https://github.com/Checkmk/checkmk) - 面向服务器、容器和网络的全面 IT 监控解决方案。
- [Netdata](https://github.com/netdata/netdata) - 实时基础设施监控和故障排除平台。
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - 自托管可用性监控工具，支持状态页面和通知。

### 密码管理器与认证

- [Authentik](https://github.com/goauthentik/authentik) - 自托管的身份提供者和认证平台。
- [Kanidm](https://github.com/kanidm/kanidm) - 注重安全性和简单性的现代化身份管理服务器。
- [LLDAP](https://github.com/lldap/lldap) - 适用于小团队和家庭实验室的轻量级 LDAP 服务器。
- [Passbolt](https://github.com/passbolt/passbolt_api) - 为团队协作设计的开源密码管理器。
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - 用 Rust 编写的轻量级 Bitwarden 兼容密码管理器服务器。

### 照片与文件管理

- [File Browser](https://github.com/filebrowser/filebrowser) - 基于 Web 的文件管理器，用于管理远程服务器上的文件。
- [Immich](https://github.com/immich-app/immich) - 受 Google Photos 启发的高性能自托管照片和视频备份解决方案。
- [PhotoPrism](https://github.com/photoprism/photoprism) - AI 驱动的自托管照片管理应用。
- [Piwigo](https://github.com/Piwigo/Piwigo) - 支持插件的开源照片画廊平台。
- [Syncthing](https://github.com/syncthing/syncthing) - 去中心化的持续文件同步应用。

### RSS、稍后阅读与知识

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - 轻量级自托管 RSS 订阅聚合器。
- [Hoarder](https://github.com/hoarder-app/hoarder) - 支持 AI 辅助整理的自托管书签管理器。
- [Karakeep](https://github.com/karakeep-app/karakeep) - 现代化的自托管书签和知识管理平台。
- [Miniflux](https://github.com/miniflux/v2) - 注重性能和简单性的极简 RSS 阅读器。
- [Wallabag](https://github.com/wallabag/wallabag) - 自托管稍后阅读应用，用于保存网页文章。

## 软件 / SaaS

### 分析与监控

- [OpenReplay](https://github.com/openreplay/openreplay) - 会话回放和产品分析平台，用于调试用户问题。
- [Plausible Analytics](https://github.com/plausible/analytics) - 轻量级且注重隐私的网站分析平台。
- [Signoz](https://github.com/SigNoz/signoz) - 用于指标、追踪和日志的开源可观测性平台。
- [Umami](https://github.com/umami-software/umami) - 注重隐私的 Google Analytics 替代方案。

### 自动化与内部工具

- [Appsmith](https://github.com/appsmithorg/appsmith) - 用于快速创建内部应用的开源框架。
- [Budibase](https://github.com/Budibase/budibase) - 低代码平台，用于内部工具、表单和运营仪表板。
- [n8n](https://github.com/n8n-io/n8n) - 支持自托管和可扩展集成的工作流自动化平台。
- [ToolJet](https://github.com/ToolJet/ToolJet) - 低代码平台，用于构建内部工具和管理面板。

### 通讯与支持

- [Chatwoot](https://github.com/chatwoot/chatwoot) - 客户互动和支持平台，支持实时聊天和全渠道收件箱。
- [Formbricks](https://github.com/formbricks/formbricks) - 开源体验管理和产品反馈平台。
- [Papercups](https://github.com/papercups-io/papercups) - 开源实时聊天和客户消息平台。
- [Typebot](https://github.com/baptisteArNo/typebot.io) - 对话式表单构建器，用于创建交互式聊天风格工作流。

### 文档与知识库

- [Docs](https://github.com/suitenumerique/docs) - 注重隐私和自托管的协作文档编辑平台。
- [Documenso](https://github.com/documenso/documenso) - 作为 DocuSign 替代方案的开源文档签名平台。
- [Outline](https://github.com/outline/outline) - 团队协作知识库和文档平台。
- [Wiki.js](https://github.com/requarks/wiki) - 功能强大且可扩展的开源 Wiki 平台。

### 文件存储与云

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - 支持多种存储提供商的自托管云存储系统。
- [Filestash](https://github.com/mickael-kerjean/filestash) - 用于管理多种存储后端文件的现代化 Web 客户端。
- [Nextcloud](https://github.com/nextcloud/server) - 自托管效率云，支持文件同步、协作和通讯工具。
- [Seafile](https://github.com/haiwen/seafile) - 高性能的开源文件托管和同步平台。

### 效率与协作

- [AFFiNE](https://github.com/toeverything/AFFiNE) - 结合文档、白板和数据库的一体化协作工作空间。
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - 作为 Notion 替代方案的开源工作空间和知识管理平台。
- [Erxes](https://github.com/erxes/erxes) - 开源增长营销、销售和客户互动平台。
- [Focalboard](https://github.com/mattermost/focalboard) - 受 Trello 和 Notion 启发的自托管项目和任务管理工具。
- [Plane](https://github.com/makeplane/plane) - 开源项目管理和问题跟踪平台。
- [Twenty](https://github.com/twentyhq/twenty) - 注重可扩展性和所有权的现代化开源 CRM 平台。

## Web 开发

### Angular UI 库

- [Angular Material](https://github.com/angular/components) - Google 维护的 Angular Material Design 组件库。
- [PrimeNG](https://github.com/primefaces/primeng) - 高性能、支持丰富自定义选项的 Angular UI 组件库。
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - 功能强大的开源 Angular UI 套件，提供丰富的组件和工具。
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - 使用 Tailwind CSS 构建的开源 Angular 管理面板模板。

### 代码编辑器

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - 用于云和桌面环境的灵活开源 IDE 平台。
- [Helix](https://github.com/helix-editor/helix) - 快速发展的模态编辑器，内置 LSP 支持和现代化默认配置。
- [Neovim](https://github.com/neovim/neovim) - 高度流行、可扩展的基于 Vim 的编辑器，注重性能和现代化工作流。
- [Visual Studio Code](https://github.com/microsoft/vscode) - 使用最广泛的开源代码编辑器，拥有庞大的扩展生态系统。
- [VSCodium](https://github.com/VSCodium/vscodium) - 不含专有组件的完全开源 VS Code 发行版。
- [Zed](https://github.com/zed-industries/zed) - 快速获得采用的高性能协作编辑器。

### 设计工具

- [Excalidraw](https://github.com/excalidraw/excalidraw) - 用于绘制手绘风格图表的虚拟白板，支持实时协作和无限画布。
- [Open Design](https://github.com/nexu-io/open-design) - 本地优先的 AI 设计工具，提供 19 种技能和 71 个品牌级设计系统，用于生成 Web、移动端和幻灯片制品。
- [open-pencil](https://github.com/open-pencil/open-pencil) - AI 原生的 Figma 兼容设计编辑器，支持无头 CLI、MCP 服务器和设计到代码导出。

### 图标

- [Bootstrap Icons](https://github.com/twbs/icons) - Bootstrap 官方图标库。
- [Boxicons](https://github.com/atisawd/boxicons) - 简单灵活的图标库。
- [css.gg](https://github.com/astrit/css.gg) - 开源 CSS 和 SVG 图标系统。
- [Feather Icons](https://github.com/feathericons/feather) - 极简的开源图标。
- [Heroicons](https://github.com/tailwindlabs/heroicons) - Tailwind CSS 官方图标集（轮廓和实心）。
- [Ionicons](https://github.com/ionic-team/ionicons) - 适用于 Ionic 和通用场景的图标包。
- [Lucide Animated](https://github.com/pqoqubbw/icons) - 使用 Motion 和 Lucide 构建的精美动画 React 图标集合。
- [React Icons](https://github.com/react-icons/react-icons) - 作为 React 组件的流行图标包。
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - 系统风格的开源图标库。
- [Simple Icons](https://github.com/simple-icons/simple-icons) - SVG 格式的品牌和 Logo 图标。
- [Tabler Icons](https://github.com/tabler/tabler-icons) - 大量、一致且活跃维护的图标集。

### React UI 库

- [Ant Design](https://github.com/ant-design/ant-design) - 具有健壮一致 React 组件的企业级设计系统。
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - 注重可访问性和出色开发者体验的模块化库。
- [Material-UI (MUI)](https://github.com/mui/material-ui) - 基于 Material Design 的 React 组件库，高度可定制且被广泛采用。
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - 用于在移动端和 Web 上构建一致 UI 的实用优先组件系统。
- [PrimeReact](https://github.com/primefaces/primereact) - 丰富的、灵活的、设计无关的 React UI 组件完整套件。
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - 为 React 重建的 Bootstrap 组件，不依赖 jQuery。
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - Semantic UI 的官方 React 集成，提供声明式组件。

### UI 组件

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - 复古 8 位风格的开源 UI 组件库。
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - 可复用的 Dotmatrix 风格加载动画组件，可通过 shadcn 注册表或手动复制安装。
- [Flowbite](https://github.com/themesberg/flowbite) - 基于 Tailwind CSS 的开源 UI 组件库，包含交互元素。
- [Headless UI](https://github.com/tailwindlabs/headlessui) - 专为 Tailwind CSS 设计的完全可访问的无样式 UI 原语。
- [LangUI](https://github.com/CommandCodeAI/langui) - 用于 AI 和 GPT 风格界面的开源 Tailwind CSS 组件。
- [loading-ui](https://github.com/turbostarter/loading-ui) - 专为使用 Tailwind CSS 的现代 React 应用打造的精美开源加载状态、骨架屏和动画占位符。
- [shadcn/ui](https://github.com/shadcn-ui/ui) - 可复制粘贴的开源 React UI 组件，基于 Tailwind CSS 构建。
- [uiverse](https://github.com/uiverse-io/galaxy) - 社区驱动的开源 UI 元素，使用 HTML 和 CSS 构建。

### Vue UI 库

- [Quasar](https://github.com/quasarframework/quasar) - 功能齐全的 Vue 框架，用于构建 SPA、SSR、移动端和桌面应用。
- [Vuetify](https://github.com/vuetifyjs/vuetify) - 拥有庞大生态系统的 Vue Material Design 组件框架。

## 贡献

欢迎贡献！如果你想参与贡献：

1. Fork 本仓库并创建新分支：`feat/project-name`
2. 将你的条目添加到 `README.md` 的相应部分，遵循以下格式。
3. 推送到分支（`git push origin feat/project-name`）
4. 创建 Pull Request，标题类似 `feat: Project Name`，并简要说明其所属原因。

更多信息请参阅我们的[贡献指南](CONTRIBUTING.md)。

- ❤️ 感谢你对项目的贡献！你的帮助非常宝贵。

<div align="center">
  
  <h3>贡献者</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
