<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    <strong>真にオープンソースなリソース</strong>のコレクション &mdash;
    <br/>
    本当はオープンソースでないプロジェクトにうんざりした方へ。
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

## 目次

<!--lint disable awesome-list-item-->

- [バックエンド / BaaS](#バックエンド--baas)
  - [API & GraphQL](#api--graphql)
  - [認証 & IdP](#認証--idp)
  - [Backend as a Service](#backend-as-a-service)
  - [フレームワーク](#フレームワーク)
- [CLI ツール](#cliツール)
  - [開発者ツール](#開発者ツール)
  - [ファイル管理 & ナビゲーション](#ファイル管理--ナビゲーション)
  - [パッケージマネージャ & ランタイム](#パッケージマネージャ--ランタイム)
  - [生産性 & ワークフロー](#生産性--ワークフロー)
  - [シェル & ターミナル環境](#シェル--ターミナル環境)
  - [システム監視 & ユーティリティ](#システム監視--ユーティリティ)
- [データベース](#データベース)
  - [グラフデータベース](#グラフデータベース)
  - [キーバリュー & キャッシュデータベース](#キーバリュー--キャッシュデータベース)
  - [NoSQLデータベース](#nosqlデータベース)
  - [リレーショナルデータベース](#リレーショナルデータベース)
  - [検索 & 分析エンジン](#検索--分析エンジン)
  - [時系列データベース](#時系列データベース)
  - [ベクトルデータベース](#ベクトルデータベース)
- [DevOps](#devops)
  - [コンテナ & 仮想化](#コンテナ--仮想化)
  - [Kubernetes & オーケストレーション](#kubernetes--オーケストレーション)
  - [CI / CD](#ci--cd)
  - [インフラストラクチャ as Code](#インフラストラクチャ-as-code)
  - [監視 & 可観測性](#監視--可観測性)
  - [ネットワーキング & リバースプロキシ](#ネットワーキング--リバースプロキシ)
  - [シークレット & セキュリティ](#シークレット--セキュリティ)
- [モバイルアプリ](#モバイルアプリ)
  - [ブラウザ & インターネット](#ブラウザ--インターネット)
  - [ファイル管理 & ユーティリティ](#ファイル管理--ユーティリティ)
  - [ランチャー & カスタマイズ](#ランチャー--カスタマイズ)
  - [メディア & 音楽](#メディア--音楽)
  - [メッセージング & コミュニケーション](#メッセージング--コミュニケーション)
  - [パスワードマネージャ & セキュリティ](#パスワードマネージャ--セキュリティ)
  - [生産性 & ノート](#生産性--ノート)
  - [動画 & ストリーミング](#動画--ストリーミング)
- [セキュリティ](#セキュリティ)
  - [コンテナ & Kubernetesセキュリティ](#コンテナ--kubernetesセキュリティ)
  - [エンドポイント & ランタイムセキュリティ](#エンドポイント--ランタイムセキュリティ)
  - [ネットワークセキュリティ & 監視](#ネットワークセキュリティ--監視)
  - [プライバシー & 匿名性](#プライバシー--匿名性)
  - [リバースエンジニアリング & ペンテスト](#リバースエンジニアリング--ペンテスト)
  - [シークレット管理 & 暗号化](#シークレット管理--暗号化)
  - [脆弱性スキャン & 分析](#脆弱性スキャン--分析)
- [セルフホスト](#セルフホスト)
  - [開発者プラットフォーム & Gitサービス](#開発者プラットフォーム--gitサービス)
  - [DNS, ネットワーキング & プライバシー](#dns-ネットワーキング--プライバシー)
  - [ホームラボ & サーバー管理](#ホームラボ--サーバー管理)
  - [メディアサーバー & ストリーミング](#メディアサーバー--ストリーミング)
  - [監視 & アップタイム](#監視--アップタイム)
  - [パスワードマネージャ & 認証](#パスワードマネージャ--認証)
  - [写真 & ファイル管理](#写真--ファイル管理)
  - [RSS, 後で読む & ナレッジ](#rss-後で読む--ナレッジ)
- [ソフトウェア / SaaS](#ソフトウェア--saas)
  - [分析 & 監視](#分析--監視)
  - [自動化 & 社内ツール](#自動化--社内ツール)
  - [コミュニケーション & サポート](#コミュニケーション--サポート)
  - [ドキュメント & ナレッジベース](#ドキュメント--ナレッジベース)
  - [ファイルストレージ & クラウド](#ファイルストレージ--クラウド)
  - [生産性 & コラボレーション](#生産性--コラボレーション)
- [Web開発](#web開発)
  - [Angular UIライブラリ](#angular-uiライブラリ)
  - [コードエディタ](#コードエディタ)
  - [デザインツール](#デザインツール)
  - [アイコン](#アイコン)
  - [React UIライブラリ](#react-uiライブラリ)
  - [UIコンポーネント](#uiコンポーネント)
  - [Vue UIライブラリ](#vue-uiライブラリ)

## バックエンド / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - モダンで軽量なGraphQLサーバー。
- [PostgREST](https://github.com/PostgREST/postgrest) - PostgreSQLをREST APIに即座に変換。
- [tRPC](https://github.com/trpc/trpc) - スキーマなしのエンドツーエンド型型安全API。

### 認証 & IdP

- [Authelia](https://github.com/authelia/authelia) - セルフホスト多要素認証ソリューション。
- [Keycloak](https://github.com/keycloak/keycloak) - Red Hatがバックするフル機能のオープンソースIAMソリューション（SSO、OAuth2、OIDC、SAML）。
- [Ory Kratos](https://github.com/ory/kratos) - 完全にオープンソースのコアを持つセキュリティ重視の認証システム。

### Backend as a Service

- [Parse Server](https://github.com/parse-community/parse-server) - 重要なクローズド機能のない成熟したオープンソースバックエンド。
- [PocketBase](https://github.com/pocketbase/pocketbase) - SQLite、認証、REST APIを備えた組み込みバックエンド。完全にオープンソース。
- [Supabase](https://github.com/supabase/supabase) - PostgreSQL上で構築されたオープンソースFirebase代替ツール。
- [UnDB](https://github.com/undb-io/undb) - セルフホストノーコードデータベース＆BaaS（SQLiteベース、Airtableライク）。

### フレームワーク

- [AdonisJS](https://github.com/adonisjs/core) - TypeScriptファーストアプローチのモダンNode.jsフレームワーク。
- [Elysia](https://github.com/elysiajs/elysia) - 強い型付けを持つBunファーストの高性能フレームワーク。
- [FeathersJS](https://github.com/feathersjs/feathers) - RESTとリアルタイムアプリケーション向けの柔軟なフレームワーク。
- [Hono](https://github.com/honojs/hono) - モダンランタイム（Edge、Bun、Deno、Node）向けの超高速フレームワーク。
- [LoopBack](https://github.com/loopbackio/loopback-next) - OpenAPIベースの高度なAPIフレームワーク。
- [Midway](https://github.com/midwayjs/midway) - Springにインスパイアされた依存性注入を持つNode.jsフレームワーク。
- [Moleculer](https://github.com/moleculerjs/moleculer) - 高速で強力なマイクロサービスフレームワーク。
- [Wasp](https://github.com/wasp-lang/wasp) - バックエンドを自動生成する宣言型フルスタックフレームワーク。

## CLIツール

### 開発者ツール

- [bat](https://github.com/sharkdp/bat) - 構文ハイライトとGit統合を持つ`cat`クローン。
- [delta](https://github.com/dandavison/delta) - Gitおよびdiff出力向けの構文ハイライト付きページャ。
- [fd](https://github.com/sharkdp/fd) - シンプルで高速、ユーザーフレンドリーな`find`の代替ツール。
- [httpie](https://github.com/httpie/cli) - APIおよびWebサービス向けのヒューマンフレンドリーなコマンドラインHTTPクライアント。
- [hyperfine](https://github.com/sharkdp/hyperfine) - 統計分析付きのコマンドラインベンチマークツール。
- [jq](https://github.com/jqlang/jq) - ターミナル向けの軽量で柔軟なJSONプロセッサ。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Dockerおよびコンテナ管理向けのターミナルUI。
- [lazygit](https://github.com/jesseduffield/lazygit) - Git操作のためのシンプルなターミナルUI。
- [ripgrep](https://github.com/BurntSushi/ripgrep) - `.gitignore`を尊重する超高速再帰検索ツール。
- [xh](https://github.com/ducaale/xh) - HTTPieの代替として設計されたフレンドリーで高速なHTTPクライアント。
- [yq](https://github.com/mikefarah/yq) - jqにインスパイアされた可搬性のあるYAML、JSON、XML、TOMLプロセッサ。

### ファイル管理 & ナビゲーション

- [broot](https://github.com/Canop/broot) - ファジィ検索を持つインタラクティブなディレクトリツリーナビゲーター。
- [fzf](https://github.com/junegunn/fzf) - コマンドライン用の汎用ファジィフィンダー。
- [nnn](https://github.com/jarun/nnn) - 軽量で超高速なターミナルファイルブラウザ。
- [ranger](https://github.com/ranger/ranger) - Vimスタイルのキーバインドを持つコンソールファイルマネージャ。
- [yazi](https://github.com/sxyazi/yazi) - Rustで書かれた超高速ターミナルファイルマネージャ。
- [zoxide](https://github.com/ajeetdsouza/zoxide) - zにインスパイアされfrecencyで動作するスマートな`cd`コマンド。

### パッケージマネージャ & ランタイム

- [asdf](https://github.com/asdf-vm/asdf) - 複数のランタイムとツールをサポートする拡張可能なバージョンマネージャ。
- [Bun](https://github.com/oven-sh/bun) - 高速JavaScriptランタイム、パッケージマネージャ、バンドラー。
- [Deno](https://github.com/denoland/deno) - Rustで構築されたセキュアなJavaScriptおよびTypeScriptランタイム。
- [Homebrew](https://github.com/Homebrew/brew) - macOSおよびLinux向けの人気パッケージマネージャ。
- [pnpm](https://github.com/pnpm/pnpm) - JavaScript用の高速でディスクスペース効率の良いパッケージマネージャ。

### 生産性 & ワークフロー

- [atuin](https://github.com/atuinsh/atuin) - 暗号化ストレージ付きのシェル履歴同期＆検索エンジン。
- [Glow](https://github.com/charmbracelet/glow) - ターミナルでMarkdownファイルを美しくレンダリング。
- [gum](https://github.com/charmbracelet/gum) - グラマラスなシェルスクリプトとターミナルワークフローを構築するためのツール。
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - 強力なCLIタスク管理＆生産性ツール。
- [wtfutil](https://github.com/wtfutil/wtf) - 開発者情報を表示するパーソナルターミナルダッシュボード。

### シェル & ターミナル環境

- [Fish Shell](https://github.com/fish-shell/fish-shell) - 自動提案とモダンなデフォルトを持つユーザーフレンドリーなスマートシェル。
- [Nushell](https://github.com/nushell/nushell) - プレーンテキストではなく構造化データを中心に構築されたモダンシェル。
- [tmux](https://github.com/tmux/tmux) - 永続的なセッションとペインを管理するためのターミナルマルチプレクサ。
- [Warp](https://github.com/warpdotdev/Warp) - AIとコラボレーション機能を持つRustベースのモダンターミナル。
- [WezTerm](https://github.com/wez/wezterm) - Rustで書かれたGPUアクセラレータークロスプラットフォームターミナルエミュレータ。
- [Zellij](https://github.com/zellij-org/zellij) - 拡張性と使いやすさに焦点を当てたターミナルワークスペース＆マルチプレクサ。

### システム監視 & ユーティリティ

- [bottom](https://github.com/ClementTsang/bottom) - htopにインスパイアされたクロスプラットフォームグラフィカルプロセス＆システムモニタ。
- [btop](https://github.com/aristocratos/btop) - Linux、macOS、BSD向けのモダンで視覚的にリッチなリソースモニタ。
- [dua](https://github.com/Byron/dua-cli) - インタラクティブなターミナルUIを持つ高速ディスク使用量アナライザ。
- [dust](https://github.com/bootandy/dust) - Rustで書かれた`du`のより直感的な代替ツール。
- [htop](https://github.com/htop-dev/htop) - インタラクティブなプロセスビューア＆システムモニタ。
- [procs](https://github.com/dalance/procs) - カラフルで構造化された出力を持つ`ps`のモダンな代替ツール。

## データベース

### グラフデータベース

- [Dgraph](https://github.com/hypermodeinc/dgraph) - GraphQLネイティブAPIを持つ分散グラフデータベース。

### キーバリュー & キャッシュデータベース

- [Apache Ignite](https://github.com/apache/ignite) - 分散インメモリデータベース＆キャッシングプラットフォーム。
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - RedisおよびMemcached APIと互換性のあるモダンインメモリデータストア。
- [etcd](https://github.com/etcd-io/etcd) - Kubernetesのコーディネーションおよびサービスディスカバリに使用される分散キーバリューストア。
- [Valkey](https://github.com/valkey-io/valkey) - 完全にオープンソースな開発に焦点を当てたコミュニティ主導のRedisフォーク。

### NoSQLデータベース

- [ArangoDB](https://github.com/arangodb/arangodb) - グラフ、ドキュメント、キーバリューデータモデルをサポートするマルチモデルデータベース。
- [Cassandra](https://github.com/apache/cassandra) - 高可用性のために構築された非常にスケーラブルなワイドカラムデータベース。
- [CouchDB](https://github.com/apache/couchdb) - レプリケーションとオフラインファースト機能を持つ分散JSONドキュメントデータベース。
- [FerretDB](https://github.com/FerretDB/FerretDB) - PostgreSQL上に構築されたオープンソースMongoDB代替ツール。
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - チェンジフィードサポートを持つリアルタイム分散データベース。

### リレーショナルデータベース

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - 分析および可観測性向けの高性能カラム导向型データベース。
- [CockroachDB](https://github.com/cockroachdb/cockroach) - スケーラビリティとフォルトトレランスに焦点を当てた分散SQLデータベース。
- [DuckDB](https://github.com/duckdb/duckdb) - 高速OLAPワークロード向けに設計されたプロセス内分析データベース。
- [FoundationDB](https://github.com/apple/foundationdb) - 強い一貫性を設計した分散トランザクショナルキーバリューデータベース。
- [LibSQL](https://github.com/tursodatabase/libsql) - 分散および組み込みワークロードに焦点を当てたSQLiteのオープンソースフォーク。
- [MariaDB](https://github.com/MariaDB/server) - MySQLからフォークされた強力なオープンソースガバナンスを持つコミュニティ主導リレーショナルデータベース。
- [PostgreSQL](https://github.com/postgres/postgres) - 信頼性、拡張性、SQL準拠で知られる高度なオープンソースリレーショナルデータベース。
- [RisingWave](https://github.com/risingwavelabs/risingwave) - PostgreSQLと互換性のある分散SQLストリーミングデータベース。
- [SQLite](https://github.com/sqlite/sqlite) - アプリケーションおよびモバイルデバイスで広く使用されている軽量組み込みリレーショナルデータベース。
- [TiDB](https://github.com/pingcap/tidb) - HTAPおよびクラウドネイティブワークロード向けに設計された分散MySQL互換データベース。
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - スケーラブルなアプリケーション向けの高性能分散PostgreSQL互換データベース。

### 検索 & 分析エンジン

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - 高性能インデックスとクエリに焦点を当てた全文検索エンジン。
- [Meilisearch](https://github.com/meilisearch/meilisearch) - タイポ耐性を持つ高速で開発者フレンドリーな検索エンジン。
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - Elasticsearchからフォークされたコミュニティ主導の検索＆分析エンジン。
- [Sonic](https://github.com/valeriansaliou/sonic) - 速度に最適化された軽量でスキーマレスな検索バックエンド。
- [Typesense](https://github.com/typesense/typesense) - シンプルさとパフォーマンスに焦点を当てたオープンソースインスタント検索エンジン。

### 時系列データベース

- [QuestDB](https://github.com/questdb/questdb) - 高速SQL分析に焦点を当てた高性能時系列データベース。
- [TDengine](https://github.com/taosdata/TDengine) - IoT、産業、監視データ向けに設計された時系列プラットフォーム。

### ベクトルデータベース

- [Chroma](https://github.com/chroma-core/chroma) - LLMアプリケーション向けに設計された軽量エンベディングデータベース。
- [LanceDB](https://github.com/lancedb/lancedb) - AIアプリケーションおよびローカルファーストワークフローに最適化された組み込みベクトルデータベース。
- [Milvus](https://github.com/milvus-io/milvus) - 機械学習エンベディングおよびAIワークロード向けに構築されたスケーラブルなベクトルデータベース。
- [Qdrant](https://github.com/qdrant/qdrant) - AIおよびセマンティック検索アプリケーション向けのベクトル類似性検索エンジン。
- [SurrealDB](https://github.com/surrealdb/surrealdb) - ベクトルサポートを備えたドキュメント、グラフ、リレーショナル機能を組み合わせたマルチモデルデータベース。
- [Weaviate](https://github.com/weaviate/weaviate) - GraphQLおよびAIネイティブ機能を持つオープンソースベクトル検索エンジン。

## DevOps

### コンテナ & 仮想化

- [containerd](https://github.com/containerd/containerd) - KubernetesおよびDockerで使用される高性能コンテナランタイム。
- [CRI-O](https://github.com/cri-o/cri-o) - CRI標準を実装するKubernetesネイティブコンテナランタイム。
- [Incus](https://github.com/lxc/incus) - LXDからフォークされたモダンなコミュニティ主導コンテナ＆仮想マシンマネージャ。
- [LXC](https://github.com/lxc/lxc) - 低レベルシステムコンテナサポートを持つ軽量Linuxコンテナランタイム。
- [Podman](https://github.com/containers/podman) - セキュリティとOCI互換性に焦点を当てたデーモンレスコンテナエンジン。

### Kubernetes & オーケストレーション

- [Argo CD](https://github.com/argoproj/argo-cd) - Kubernetes向けの宣言型GitOps継続デリバリツール。
- [Flux](https://github.com/fluxcd/flux2) - KubernetesクラスタをGitリポジトリと同期させるGitOpsツールキット。
- [Helm](https://github.com/helm/helm) - Kubernetesアプリケーション向けパッケージマネージャ。
- [k3s](https://github.com/k3s-io/k3s) - エッジおよびIoTワークロードに最適化された軽量Kubernetesディストリビューション。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - 代表的なオープンソースコンテナオーケストレーションプラットフォーム。
- [Rancher](https://github.com/rancher/rancher) - マルチクラスタ運用向けKubernetes管理プラットフォーム。

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - 宣言型パイプラインを持つコンテナベース継続インテグレーションシステム。
- [GoCD](https://github.com/gocd/gocd) - 複雑なワークフローに焦点を当てたオープンソース継続デリバリサーバー。
- [Jenkins](https://github.com/jenkinsci/jenkins) - CI/CDパイプライン向けの拡張可能な自動化サーバー。
- [Tekton](https://github.com/tektoncd/pipeline) - CI/CDシステムを作成するためのKubernetesネイティブフレームワーク。
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - Droneにインスパイアされた軽量で完全にオープンソースなCI/CDシステム。

### インフラストラクチャ as Code

- [Ansible](https://github.com/ansible/ansible) - 構成管理およびプロビジョニングのためのエージェントレス自動化ツール。
- [Atlantis](https://github.com/runatlantis/atlantis) - TerraformおよびOpenTofuプロジェクト向けGitOpsワークフロー自動化。
- [Crossplane](https://github.com/crossplane/crossplane) - クラウドインフラストラクチャ向けのKubernetesベースコントロールプレーンフレームワーク。
- [OpenTofu](https://github.com/opentofu/opentofu) - Terraformからフォークされたコミュニティ主導のインフラストラクチャ as Codeツール。
- [Pulumi](https://github.com/pulumi/pulumi) - 一般的なプログラミング言語を使用するインフラストラクチャ as Codeプラットフォーム。

### 監視 & 可観測性

- [Jaeger](https://github.com/jaegertracing/jaeger) - マイクロサービス監視のための分散トレーシングプラットフォーム。
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - テレメトリデータ収集のためのオープンスタンダード＆ツール。
- [Prometheus](https://github.com/prometheus/prometheus) - 信頼性とスケーラビリティに焦点を当てた監視＆アラーティングツールキット。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 高性能時系列データベース＆監視スタック。

### ネットワーキング & リバースプロキシ

- [Caddy](https://github.com/caddyserver/caddy) - 自動HTTPSとシンプルな構成を持つWebサーバー。
- [CoreDNS](https://github.com/coredns/coredns) - Kubernetesで一般的に使用される柔軟で拡張可能なDNSサーバー。
- [HAProxy](https://github.com/haproxy/haproxy) - 信頼性の高いハイベイラビリティロードバランサー＆プロキシサーバー。
- [Nginx](https://github.com/nginx/nginx) - 高性能Webサーバー＆リバースプロキシ。
- [Traefik](https://github.com/traefik/traefik) - 自動サービスディスカバリーを持つモダンなリバースプロキシ＆イングレスコントローラ。

### シークレット & セキュリティ

- [Falco](https://github.com/falcosecurity/falco) - コンテナおよびKubernetes向けランタイムセキュリティ監視。
- [Infisical](https://github.com/Infisical/infisical) - チームおよびインフラストラクチャ向けオープンソースシークレット管理プラットフォーム。
- [Step CA](https://github.com/smallstep/certificates) - プライベート認証局＆自動TLS管理ソリューション。
- [Trivy](https://github.com/aquasecurity/trivy) - コンテナ、依存関係、Kubernetes、IaC向けセキュリティスキャナ。

## モバイルアプリ

### ブラウザ & インターネット

- [Cromite](https://github.com/uazo/cromite) - プライバシー重視の広告ブロック付きChromiumフォーク。
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - Mozillaが開発するオープンソースモバイルブラウザ。
- [Fulguris](https://github.com/Slion/Fulguris) - 軽量プライバシー重視のAndroidブラウザ。
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - Android向けオープンソースRedditクライアント。
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - Androidプライバシー強化Firefoxフォーク。

### ファイル管理 & ユーティリティ

- [Material Files](https://github.com/zhanghai/MaterialFiles) - Android向けMaterial Designファイルマネージャ。
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Android向けモダンなF-Droidクライアント。
- [Obtainium](https://github.com/ImranR98/Obtainium) - GitHubおよびその他のソースから直接アプリを更新。
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - Androidシステムクリーニング＆メンテナンスユーティリティ。
- [Termux](https://github.com/termux/termux-app) - Androidターミナルエミュレータ＆Linux環境。

### ランチャー & カスタマイズ

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - 検索と生産性に焦点を当てたランチャー。
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - Pixelインスパイアのカスタマイズ可能なAndroidランチャー。
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - 拡張カスタマイズを持つLawnchairのフォーク。

### メディア & 音楽

- [Auxio](https://github.com/OxygenCobalt/Auxio) - シンプルさとパフォーマンスに焦点を当てたローカルAndroid音楽プレーヤー。
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - Material Youインスパイアのローカル音楽プレーヤー。
- [InnerTune](https://github.com/z-huang/InnerTune) - Android向けモダンYouTube Musicクライアント。
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - オフライン再生、同期歌詞、Material 3デザインを持つ機能-richなYouTube Musicクライアント。
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - Material 3で構築されたプライバシーファーストのAndroid音楽プレーヤー。
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - モダンUIを持つスタイリッシュなAndroid音楽プレーヤー。
- [RiMusic](https://github.com/fast4x/RiMusic) - YouTube Musicで動作する美しいAndroid音楽プレーヤー。
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - パーソナル音楽ライブラリ管理のためのオープンソースモバイルコンパニオン。
- [Symphony](https://github.com/zyrouge/symphony) - Flutterベースのエレガントで軽量な音楽プレーヤー。
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - Android向け軽量オープンソース音楽ストリーミングアプリ。
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - クラシックAndroid音楽プレーヤーエクスペリエンスを持つPhonographのフォーク。

### メッセージング & コミュニケーション

- [Briar](https://github.com/briar/briar) - P2P暗号化メッセージングアプリ。
- [Element](https://github.com/element-hq/element-android) - Matrixベースのセキュアメッセージングアプリケーション。
- [FairEmail](https://github.com/M66B/FairEmail) - 拡張カスタマイズを持つプライバシー重視メールクライアント。
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - Android向けオープンソースメールクライアント。
- [Molly](https://github.com/mollyim/mollyim-android) - Android向け強化Signalフォーク。
- [Session](https://github.com/session-foundation/session-android) - 電話番号なしのプライバシー重視暗号化メッセンジャー。

### パスワードマネージャ & セキュリティ

- [Aegis](https://github.com/beemdevelopment/Aegis) - セキュアな二要素認証アプリ。
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - バックアップ付き二要素認証アプリ。
- [Bitwarden](https://github.com/bitwarden/android) - Android向けオープンソースパスワードマネージャ。
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - KeePass互換パスワードマネージャ。
- [Proton Pass](https://github.com/protonpass/android-pass) - Protonが開発したパスワードマネージャ。

### 生産性 & ノート

- [Joplin](https://github.com/laurent22/joplin) - 同期サポートを持つノート-taking＆タスク管理アプリケーション。
- [Logseq](https://github.com/logseq/logseq) - ナレッジ管理＆アウトライニングアプリケーション。
- [Markor](https://github.com/gsantner/markor) - Android向けMarkdownエディタ＆ノート-takingアプリ。
- [NoteGen](https://github.com/codexu/note-gen) - キャプチャ、編集、オプション同期、AI支援組織化を持つローカルファーストMarkdownノート-takingアプリ。
- [Notesnook](https://github.com/streetwriters/notesnook) - プライバシー重視暗号化ノート-takingアプリ。
- [Quillpad](https://github.com/quillpad/quillpad) - ミニマルMaterial Youノート-takingアプリ。
- [Standard Notes](https://github.com/standardnotes/app) - エンドツーエンド暗号化ノートアプリケーション。
- [Tasks.org](https://github.com/tasks/tasks) - Android向けオープンソースタスク管理アプリ。

### 動画 & ストリーミング

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - Mihonからフォークされたアニメストリーミング＆マンガリーダー。
- [Grayjay](https://github.com/futo-org/grayjay-android) - 複数のコンテンツソースをサポートする統合メディアプラットフォーム。
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - JellyfinメディアサーバーのAndroidクライアント。
- [LibreTube](https://github.com/libre-tube/LibreTube) - Pipedを使用するプライバシー重視YouTubeクライアント。
- [Mihon](https://github.com/mihonapp/mihon) - Android向けオープンソースマンガリーダー。
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - Google依存なしのAndroid向け軽量YouTubeフロントエンド。
- [Seal](https://github.com/JunkFood02/Seal) - yt-dlpで動作する動画＆音声ダウンローダー。

## セキュリティ

### コンテナ & Kubernetesセキュリティ

- [Chainguard Images](https://github.com/chainguard-images/images) - サプライチェーンセキュリティに焦点を当てた最小限で強化されたコンテナイメージ。
- [Dockle](https://github.com/goodwithtech/dockle) - セキュリティベストプラクティスに焦点を当てたコンテナイメージリンター。
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - CIS Kubernetesベンチマークコンプライアンスチェッカー。
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Kubernetes侵入テスト＆セキュリティ監査ツール。
- [Kubescape](https://github.com/kubescape/kubescape) - リスク分析＆コンプライアンススキャン向けKubernetesセキュリティプラットフォーム。
- [Kyverno](https://github.com/kyverno/kyverno) - セキュリティ、ガバナンス、コンプライアンス向けのKubernetesネイティブポリシーエンジン。

### エンドポイント & ランタイムセキュリティ

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - Unixシステム上のルートキット検出ツールセット。
- [Lynis](https://github.com/CISOfy/lynis) - Unixベースシステム向けセキュリティ監査＆強化ツール。
- [OpenEDR](https://github.com/ComodoSecurity/openedr) - 監視および脅威分析向けエンドポイント検出＆レスポンスプラットフォーム。
- [Osquery](https://github.com/osquery/osquery) - SQLでシステムデータを公開するOSインストルメンテーションフレームワーク。
- [Wazero](https://github.com/tetratelabs/wazero) - サンドボックス化されたアプリケーション実行向けセキュアWebAssemblyランタイム。

### ネットワークセキュリティ & 監視

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - サーバーおよびアプリケーションを保護するコラボレーティブIPS＆脅威インテリジェンスプラットフォーム。
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - 侵入検出、エンタープライズセキュリティ監視、ログ管理向けLinuxディストリビューション。
- [Snort](https://github.com/snort3/snort3) - 広く使用されているオープンソース侵入防止＆検出システム。
- [Suricata](https://github.com/OISF/suricata) - 高性能ネットワークIDS、IPS、ネットワークセキュリティ監視エンジン。
- [Wazuh](https://github.com/wazuh/wazuh) - 脅威検出＆コンプライアンス向けオープンソースXDR＆SIEMプラットフォーム。
- [Zeek](https://github.com/zeek/zeek) - 監視およびセキュリティ可視性向けの強力なネットワーク分析フレームワーク。

### プライバシー & 匿名性

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - プライバシーとセキュリティに焦点を当てた強化Firefox設定。
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - プライバシーとセキュリティに焦点を当てたAndroidベースのモバイルOS。
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Linux向けアプリケーションファイアウォール＆送信接続モニタ。
- [Tor](https://github.com/torproject/tor) - プライバシー保護と監視対抗のための匿名オーバーレイネットワーク。

### リバースエンジニアリング & ペンテスト

- [Amass](https://github.com/owasp-amass/amass) - 攻撃面マッピング＆外部アセットディスカバリツール。
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - NSAが開発したソフトウェアリバースエンジニアリングスイート。
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - セキュリティ監査およびエクスプロイト開発向けペンテストフレームワーク。
- [Nmap](https://github.com/nmap/nmap) - ネットワークディスカバリ＆セキュリティ監査ユーティリティ。
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - OWASPが管理するオープンソースWebアプリケーションセキュリティスキャナ。
- [Responder](https://github.com/lgandx/Responder) - 内部ネットワーク評価で一般的に使用されるLLMNR、NBT-NS、MDNSプーナー。
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - 自動SQLインジェクション＆データベーステイクオーバーツール。
- [Wireshark](https://github.com/wireshark/wireshark) - トラブルシューティングおよびパケット検査向けネットワークプロトコルアナライザ。
- [Hetty](https://github.com/dstotijn/hetty) - パケットを修正できるオープンソースプロキシ。

### シークレット管理 & 暗号化

- [age](https://github.com/FiloSottile/age) - シンプルでモダン、セキュアなファイル暗号化ツール。
- [Cryptomator](https://github.com/cryptomator/cryptomator) - プライバシーに焦点を当てたクライアント側暗号化クラウドストレージソリューション。
- [HashiCorp Vault](https://github.com/hashicorp/vault) - センシティブなインフラストラクチャデータを保護するためのシークレット管理＆暗号化プラットフォーム。
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Gitリポジトリで暗号化されたシークレットを安全に管理するためのKubernetesコントローラ。
- [SOPS](https://github.com/getsops/sops) - 構造化設定ファイルおよびシークレットの暗号化＆管理ツール。

### 脆弱性スキャン & 分析

- [Clair](https://github.com/quay/clair) - コンテナイメージの脆弱性識別向け静的解析ツール。
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - SBOM分析＆脆弱性追跡向けソフトウェアサプライチェーンセキュリティプラットフォーム。
- [Grype](https://github.com/anchore/grype) - コンテナイメージおよびファイルシステム向け脆弱性スキャナ。
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - SCAP標準を実装するセキュリティコンプライアンス＆脆弱性スキャンフレームワーク。
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - ソフトウェアプロジェクトの脆弱な依存関係検出ツール。
- [Semgrep](https://github.com/semgrep/semgrep) - ソースコードのセキュリティ問題検出向け静的解析ツール。

## セルフホスト

### 開発者プラットフォーム & Gitサービス

- [Gitea](https://github.com/go-gitea/gitea) - シンプルで軽量なセルフホストGitサービス。
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - ソースコントロールとCI/CD機能を備えた完全なDevOpsプラットフォーム。
- [Onedev](https://github.com/theonedev/onedev) - CI/CDとイシュートラッキングを備えたオールインワンGitサーバー。

### DNS, ネットワーキング & プライバシー

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - 広告＆トラッカーブロック付きセルフホストDNSサーバー。
- [Headscale](https://github.com/juanfont/headscale) - Tailscaleクライアントと互換性のあるオープンソースセルフホスト協調サーバー。
- [NetBird](https://github.com/netbirdio/netbird) - プライベートコネクティビティ向けWireGuardベースセキュアネットワーキングプラットフォーム。
- [Pi-hole](https://github.com/pi-hole/pi-hole) - プライバシー向上のためのネットワーク全体広告ブロッカー＆DNSシンクホール。
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - モダンプロトコルサポートを持つ強力なオープンソースDNSサーバー。

### ホームラボ & サーバー管理

- [CapRover](https://github.com/caprover/caprover) - DockerでWebアプリケーションをデプロイするための軽量セルフホストPaaSプラットフォーム。
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) - セルフホストアプリケーション向けのシンプルで初心者フレンドリーなホームクラウドOS。
- [Coolify](https://github.com/coollabsio/coolify) - Heroku、Netlify、Vercelのオープンソースセルフホスト代替ツール。
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - アプリ管理、リバースプロキシ、認証を1つのインターフェースで管理するセルフホストポータル。
- [Dokploy](https://github.com/Dokploy/dokploy) - DockerおよびVPS環境向けに構築されたモダンなセルフホストデプロイプラットフォーム。
- [Umbrel](https://github.com/getumbrel/umbrel) - セルフホストアプリケーションおよびサービスを実行するためのパーソナルサーバープラットフォーム。
- [YunoHost](https://github.com/YunoHost/yunohost) - シンプルさとプライバシーに焦点を当てたDebianベースのセルフホスティングプラットフォーム。

### メディアサーバー & ストリーミング

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - モダンアプリとメタデータサポートを備えたセルフホストオーディオブック＆ポッドキャストサーバー。
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - セルフホストインターネットラジオ局向けWebラジオ管理スイート。
- [Jellyfin](https://github.com/jellyfin/jellyfin) - 映画、テレビ番組、音楽、ライブTV向けの完全にオープンソースなメディアサーバー。
- [Navidrome](https://github.com/navidrome/navidrome) - Subsonicクライアントと互換性のある軽量セルフホスト音楽ストリーミングサーバー。
- [Owncast](https://github.com/owncast/owncast) - チャットとフェデレーションサポートを備えたセルフホストライブストリーミングサーバー。
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - セルフホストYouTubeメディアサーバー＆動画アーカイブプラットフォーム。

### 監視 & アップタイム

- [Beszel](https://github.com/henrygd/beszel) - Dockerサポートを持つ軽量サーバー監視プラットフォーム。
- [Checkmk](https://github.com/Checkmk/checkmk) - サーバー、コンテナ、ネットワーク向けの包括的IT監視ソリューション。
- [Netdata](https://github.com/netdata/netdata) - リアルタイムインフラストラクチャ監視＆トラブルシューティングプラットフォーム。
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - ステータスページと通知を持つセルフホストアップタイム監視ツール。

### パスワードマネージャ & 認証

- [Authentik](https://github.com/goauthentik/authentik) - セルフホストIdP＆認証プラットフォーム。
- [Kanidm](https://github.com/kanidm/kanidm) - セキュリティとシンプルさに焦点を当てたモダンなIdMサーバー。
- [LLDAP](https://github.com/lldap/lldap) - 小規模チームおよびホームラボ環境向け軽量LDAPサーバー。
- [Passbolt](https://github.com/passbolt/passbolt_api) - チームコラボレーション向けに設計されたオープンソースパスワードマネージャ。
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Rustで書かれた軽量Bitwarden互換パスワードマネージャサーバー。

### 写真 & ファイル管理

- [File Browser](https://github.com/filebrowser/filebrowser) - リモートサーバーのファイル管理向けWebベースファイルマネージャ。
- [Immich](https://github.com/immich-app/immich) - Google Photosにインスパイアされた高性能セルフホスト写真＆動画バックアップソリューション。
- [PhotoPrism](https://github.com/photoprism/photoprism) - AI駆動のセルフホスト写真管理アプリケーション。
- [Piwigo](https://github.com/Piwigo/Piwigo) - プラグインサポートを持つオープンソース写真ギャラリープラットフォーム。
- [Syncthing](https://github.com/syncthing/syncthing) - 分散型継続ファイル同期アプリケーション。

### RSS, 後で読む & ナレッジ

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - 軽量でセルフホストRSSフィードアグリゲータ。
- [Hoarder](https://github.com/hoarder-app/hoarder) - AI支援組織化を持つセルフホストブックマークマネージャ。
- [Karakeep](https://github.com/karakeep-app/karakeep) - モダンなセルフホストブックマーク＆ナレッジ管理プラットフォーム。
- [Miniflux](https://github.com/miniflux/v2) - パフォーマンスとシンプルさに焦点を当てたミニマリストRSSリーダー。
- [Wallabag](https://github.com/wallabag/wallabag) - Web記事を保存するためのセルフホスト「後で読む」アプリケーション。

## ソフトウェア / SaaS

### 分析 & 監視

- [OpenReplay](https://github.com/openreplay/openreplay) - ユーザー問題のデバッグ向けセッションリプレイ＆プロダクト分析プラットフォーム。
- [Plausible Analytics](https://github.com/plausible/analytics) - 軽量でプライバシーに配慮したWeb分析プラットフォーム。
- [Signoz](https://github.com/SigNoz/signoz) - メトリクス、トレース、ログ向けオープンソース可観測性プラットフォーム。
- [Umami](https://github.com/umami-software/umami) - Google Analyticsの代替となるプライバシー重視Web分析。

### 自動化 & 社内ツール

- [Appsmith](https://github.com/appsmithorg/appsmith) - 社内アプリケーションを急速に作成するためのオープンソースフレームワーク。
- [Budibase](https://github.com/Budibase/budibase) - 社内ツール、フォーム、運用ダッシュボード向けローコードプラットフォーム。
- [n8n](https://github.com/n8n-io/n8n) - セルフホスティングと拡張可能なインテグレーションを持つワークフロー自動化プラットフォーム。
- [ToolJet](https://github.com/ToolJet/ToolJet) - 社内ツールおよび管理パネル構築向けローコードプラットフォーム。

### コミュニケーション & サポート

- [Chatwoot](https://github.com/chatwoot/chatwoot) - ライブチャットとオムニチャネルインボックスを持つカスタマーエンゲージメント＆サポートプラットフォーム。
- [Formbricks](https://github.com/formbricks/formbricks) - エクスペリエンス管理＆プロダクトフィードバックプラットフォームのオープンソース。
- [Papercups](https://github.com/papercups-io/papercups) - オープンソースライブチャット＆カスタマーメッセージングプラットフォーム。
- [Typebot](https://github.com/baptisteArno/typebot.io) - インタラクティブなチャットスタイルワークフロー作成向け対話型フォームビルダー。

### ドキュメント & ナレッジベース

- [Docs](https://github.com/suitenumerique/docs) - プライバシーとセルフホスティングに焦点を当てた共同ドキュメント編集プラットフォーム。
- [Documenso](https://github.com/documenso/documenso) - DocuSignの代替となるオープンソース書類署名プラットフォーム。
- [Outline](https://github.com/outline/outline) - チーム共同ナレッジベース＆ドキュメントプラットフォーム。
- [Wiki.js](https://github.com/requarks/wiki) - 強力で拡張可能なオープンソースWikiプラットフォーム。

### ファイルストレージ & クラウド

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - 複数のストレージプロバイダーをサポートするセルフホストクラウドストレージシステム。
- [Filestash](https://github.com/mickael-kerjean/filestash) - 複数のストレージバックエンドのファイル管理向けモダンWebクライアント。
- [Nextcloud](https://github.com/nextcloud/server) - ファイル同期、コラボレーション、コミュニケーションツールを備えたセルフホストプロダクティビティクラウド。
- [Seafile](https://github.com/haiwen/seafile) - 高性能オープンソースファイルホスティング＆同期プラットフォーム。

### 生産性 & コラボレーション

- [AFFiNE](https://github.com/toeverything/AFFiNE) - ドキュメント、ホワイトボード、データベースを統合したオールインワン共同ワークスペース。
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - Notionの代替としてポジショニングされたオープンソースワークスペース＆ナレッジ管理プラットフォーム。
- [Erxes](https://github.com/erxes/erxes) - 成長マーケティング、営業、カスタマーエンゲージメントプラットフォームのオープンソース。
- [Focalboard](https://github.com/mattermost/focalboard) - TrelloとNotionにインスパイアされたセルフホストプロジェクト＆タスク管理ツール。
- [Plane](https://github.com/makeplane/plane) - オープンソースプロジェクト管理＆イシュートラッキングプラットフォーム。
- [Twenty](https://github.com/twentyhq/twenty) - 拡張性とオーナーシップに焦点を当てたモダンオープンソースCRMプラットフォーム。

## Web開発

### Angular UIライブラリ

- [Angular Material](https://github.com/angular/components) - GoogleがメンテナンスするAngular向けMaterial Designコンポーネントライブラリ。
- [PrimeNG](https://github.com/primefaces/primeng) - 高パフォーマンスと幅広いカスタマイズオプションを持つリッチ Angular UIコンポーネントライブラリ。
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - 大量のコンポーネントとツールを持つ強力なオープンソースAngular UIキット。
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - Tailwind CSSで構築されたオープンソースAngular管理ダッシュボードテンプレート。

### コードエディタ

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - クラウドおよびデスクトップ環境で使用される柔軟なオープンソースIDEプラットフォーム。
- [Helix](https://github.com/helix-editor/helix) - 組み込みLSPサポートとモダンなデフォルトを持つ高速成長中のモーダルエディタ。
- [Neovim](https://github.com/neovim/neovim) - パフォーマンスとモダンなワークフローに焦点を当てた非常に人気のある拡張可能なVimベースエディタ。
- [Visual Studio Code](https://github.com/microsoft/vscode) - 大規模な拡張エコシステムを持つ最も広く使用されているオープンソースコードエディタ。
- [VSCodium](https://github.com/VSCodium/vscodium) - プロプライエタリコンポーネントのない完全にオープンソースなVS Codeディストリビューション。
- [Zed](https://github.com/zed-industries/zed) - 急成長中のコラボレーティブ高性能エディタ。

### デザインツール

- [Excalidraw](https://github.com/excalidraw/excalidraw) - リアルタイムコラボレーションと無限キャンバスを持つハンドドロースタイル図のためのバーチャルホワイトボード。
- [Open Design](https://github.com/nexu-io/open-design) - 19のスキルと71のブランドグレードデザインシステムを持つローカルファーストAIデザインツール。
- [open-pencil](https://github.com/open-pencil/open-pencil) - ヘッドレスCLI、MCPサーバー、デザイン-to-コードエクスポートを持つAIネイティブFigma互換デザインエディタ。

### アイコン

- [Bootstrap Icons](https://github.com/twbs/icons) - 公式Bootstrapアイコンライブラリ。
- [Boxicons](https://github.com/atisawd/boxicons) - シンプルで柔軟なアイコンライブラリ。
- [css.gg](https://github.com/astrit/css.gg) - オープンソースCSS＆SVGアイコンシステム。
- [Feather Icons](https://github.com/feathericons/feather) - ミニマルでクリーンなオープンソースアイコン。
- [Heroicons](https://github.com/tailwindlabs/heroicons) - 公式Tailwind CSSアイコンセット（アウトライン＆ソリッド）。
- [Ionicons](https://github.com/ionic-team/ionicons) - Ionicおよび汎用アイコンパック。
- [Lucide Animated](https://github.com/pqoqubbw/icons) - MotionとLucideで構築された美しいアニメーションReactアイコンコレクション。
- [React Icons](https://github.com/react-icons/react-icons) - Reactコンポーネントとしての人気アイコンパック。
- [Morphicons](https://github.com/guillermolg00/morphicons) - ストロークベースアイコン間のアニメーション用スプリング物理を持つユニバーサルアイコンモーフィングライブラリ。
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - システムスタイルオープンソースアイコンライブラリ。
- [Simple Icons](https://github.com/simple-icons/simple-icons) - SVG形式のブランド＆ロゴアイコン。
- [Tabler Icons](https://github.com/tabler/tabler-icons) - 大規模で一貫性のあるアクティブにメンテナンスされているアイコンセット。

### React UIライブラリ

- [Ant Design](https://github.com/ant-design/ant-design) - 堅牢で一貫性のあるReactコンポーネントを持つエンタープライズクラスデザインシステム。
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - アクセシビリティと優れた開発者体験に焦点を当てたモジュラーライブラリ。
- [Material-UI (MUI)](https://github.com/mui/material-ui) - Material DesignベースのReactコンポーネントライブラリ。非常にカスタマイズ可能で広く採用されている。
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - モバイルとWebで一貫したUIを構築するためのユーティリティファーストコンポーネントシステム。
- [PrimeReact](https://github.com/primefaces/primereact) - リッチで柔軟、デザイン无关のReact UIコンポーネントの包括的スイート。
- [Streamdown](https://github.com/vercel/streamdown) - AI生成コンテンツのストリーミングをサポートするMarkdownレンダリング用Reactコンポーネント。
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - jQuery依存なしでReact用に再構築されたBootstrapコンポーネント。
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - 宣言型コンポーネントを持つSemantic UIの公式Reactインテグレーション。

### UIコンポーネント

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - レトロ8ビットスタイルのオープンソースUIコンポーネントライブラリ。
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - shadcnレジストリまたは手動コピーでインストール可能な再利用可能なドットマトリックススタイルローディングアニメーションコンポーネント。
- [Drawably](https://github.com/Danilaa1/drawably) - アニメーション付きペンスケッチストロークとマウントごとの新鮮なランダム性を持つ手描き風UIコントロール。
- [Flowbite](https://github.com/themesberg/flowbite) - Tailwind CSSベースのインタラクティブ要素を持つオープンソースUIコンポーネントライブラリ。
- [Goey Toast](https://github.com/anl331/goey-toast) - モダンなWebアプリケーション向けの軽量でカスタマイズ可能なトースト通知ライブラリ。
- [Headless UI](https://github.com/tailwindlabs/headlessui) - Tailwind CSS用に設計された完全にアクセシブルなアンスタイルUIプリミティブ。
- [LangUI](https://github.com/CommandCodeAI/langui) - AIおよびGPTスタイルインターフェース向けオープンソースTailwind CSSコンポーネント。
- [loading-ui](https://github.com/turbostarter/loading-ui) - Tailwind CSSで構築されたモダンReactアプリ向けの美しいオープンソースローディングステート、スケルトン、アニメーションプレースホルダー。
- [shadcn/ui](https://github.com/shadcn-ui/ui) - Tailwind CSS上で構築されたReact向けコピペオープンソースUIコンポーネント。
- [uiverse](https://github.com/uiverse-io/galaxy) - HTMLとCSSで構築されたコミュニティ主導オープンソースUI要素。

### Vue UIライブラリ

- [Quasar](https://github.com/quasarframework/quasar) - SPA、SSR、モバイル、デスクトップアプリ構築向けのフル機能Vueフレームワーク。
- [Vuetify](https://github.com/vuetifyjs/vuetify) - 大きなエコシステムを持つVue向けMaterial Designコンポーネントフレームワーク。

## コントリビューション

コントリビューションは大歓迎です！参加したい方は：

1. リポジトリをフォークし、新しいブランチを作成：`feat/project-name`
2. 以下のフォーマットに従い、`README.md`の適切なセクションにエントリを追加。
3. ブランチにプッシュ（`git push origin feat/project-name`）
4. `feat: Project Name`のようなタイトルと、なぜ適切であるかの簡単な説明を含むプルリクエストを作成。

詳細は[コントリビューションガイドライン](CONTRIBUTING.md)を参照してください。

- ❤️ コントリビューションに感謝します！皆様の協力に感謝いたします。

<div align="center">
  
  <h3>コントリビューター</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
