<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    Uma coleção de <strong>recursos verdadeiramente de código aberto</strong> &mdash;
    <br/>
    porque também estou cansado de projetos que não são realmente de código aberto.
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

## Conteúdo

| Categoria       | Descrição                                                                                                                                                           | Atalho                          |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| Backend / BaaS  | Ferramentas e plataformas para serviços backend, APIs, autenticação e Backend-as-a-Service como Firebase, Supabase e frameworks para Node.js e outros runtimes.   | [Clique aqui](#backend--baas)   |
| Ferramentas CLI | Utilitários de linha de comando para produtividade, gerenciamento de arquivos, monitoramento do sistema, shells modernos e automação do fluxo de trabalho diário. | [Clique aqui](#ferramentas-cli) |
| Banco de dados   | Sistemas de banco de dados relacionais, NoSQL, grafos, busca, vetoriais e de séries temporais para diferentes casos de uso e necessidades de escalabilidade.      | [Clique aqui](#banco-de-dados)  |
| DevOps          | Infraestrutura como código, orquestração com Kubernetes, CI/CD, monitoramento, redes e segurança para implantações modernas na nuvem.                              | [Clique aqui](#devops)          |
| Apps móveis     | Frameworks e aplicações para desenvolvimento móvel multiplataforma, incluindo navegadores, produtividade, multimídia e comunicação.                                | [Clique aqui](#apps-móveis)     |
| Segurança       | Ferramentas de segurança para contêineres, redes, endpoints, engenharia reversa e gerenciamento de vulnerabilidades.                                               | [Clique aqui](#segurança)       |
| Self-Hosted     | Software que você pode hospedar em sua própria infraestrutura, incluindo plataformas Git, DNS, servidores de mídia, monitoramento e gerenciamento de arquivos.      | [Clique aqui](#self-hosted)     |
| Software / SaaS | Aplicações completas para análise, automação, comunicação, documentação, armazenamento e produtividade em equipe.                                                  | [Clique aqui](#software--saas)  |
| Desenvolvimento Web | Frameworks, bibliotecas UI, editores de código, ferramentas de design e recursos para desenvolvimento web frontend e fullstack.                                 | [Clique aqui](#desenvolvimento-web) |

## Backend / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - Servidor GraphQL moderno e leve.
- [PostgREST](https://github.com/PostgREST/postgrest) - Transforma PostgreSQL instantaneamente em uma API REST.
- [tRPC](https://github.com/trpc/trpc) - APIs tipadas de ponta a ponta sem esquemas.

### Autenticação & Identidade

- [Authelia](https://github.com/authelia/authelia) - Solução de autenticação multifator auto-hospedada.
- [Keycloak](https://github.com/keycloak/keycloak) - Solução IAM de código aberto completa (SSO, OAuth2, OIDC, SAML) apoiada pela Red Hat.
- [Ory Kratos](https://github.com/ory/kratos) - Sistema de autenticação focado em segurança com um núcleo totalmente de código aberto.

### Backend como Serviço

- [Parse Server](https://github.com/parse-community/parse-server) - Backend de código aberto maduro sem funcionalidades críticas fechadas.
- [PocketBase](https://github.com/pocketbase/pocketbase) - Backend embutido com SQLite, autenticação e API REST, totalmente de código aberto.
- [Supabase](https://github.com/supabase/supabase) - Alternativa de código aberto ao Firebase construída sobre PostgreSQL.
- [UnDB](https://github.com/undb-io/undb) - Banco de dados no-code e BaaS auto-hospedado (baseado em SQLite, estilo Airtable).

### Frameworks

- [AdonisJS](https://github.com/adonisjs/core) - Framework Node.js moderno com abordagem TypeScript-first.
- [Elysia](https://github.com/elysiajs/elysia) - Framework de alto desempenho first-class para Bun com tipagem forte.
- [FeathersJS](https://github.com/feathersjs/feathers) - Framework flexível para aplicações REST e em tempo real.
- [Hono](https://github.com/honojs/hono) - Framework ultrarrápido para runtimes modernos (Edge, Bun, Deno, Node).
- [LoopBack](https://github.com/loopbackio/loopback-next) - Framework API avançado baseado em OpenAPI.
- [Midway](https://github.com/midwayjs/midway) - Framework Node.js com injeção de dependências inspirado no Spring.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Framework rápido e poderoso de microsserviços.
- [Wasp](https://github.com/wasp-lang/wasp) - Framework fullstack declarativo que gera o backend automaticamente.

## Ferramentas CLI

### Ferramentas de Desenvolvimento

- [bat](https://github.com/sharkdp/bat) - Clone do cat com destaque de sintaxe e integração com Git.
- [delta](https://github.com/dandavison/delta) - Visualizador com destaque de sintaxe para saídas de Git e diff.
- [fd](https://github.com/sharkdp/fd) - Alternativa simples, rápida e fácil de usar ao `find`.
- [httpie](https://github.com/httpie/cli) - Cliente HTTP de linha de comando amigável para APIs e serviços web.
- [hyperfine](https://github.com/sharkdp/hyperfine) - Ferramenta de benchmarking de linha de comando com análise estatística.
- [jq](https://github.com/jqlang/jq) - Processador de JSON leve e flexível para o terminal.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Interface de terminal para Docker e gerenciamento de contêineres.
- [lazygit](https://github.com/jesseduffield/lazygit) - Interface simples de terminal para operações Git.
- [ripgrep](https://github.com/BurntSushi/ripgrep) - Ferramenta de busca recursiva extremamente rápida respeitando .gitignore.
- [xh](https://github.com/ducaale/xh) - Cliente HTTP amigável e rápido projetado como alternativa ao HTTPie.
- [yq](https://github.com/mikefarah/yq) - Processador portátil de YAML, JSON, XML e TOML inspirado no jq.

### Gerenciamento de Arquivos & Navegação

- [broot](https://github.com/Canop/broot) - Navegador interativo de árvore de diretórios com busca difusa.
- [fzf](https://github.com/junegunn/fzf) - Buscador difuso de propósito geral para a linha de comando.
- [nnn](https://github.com/jarun/nnn) - Explorador de arquivos de terminal leve e extremamente rápido.
- [ranger](https://github.com/ranger/ranger) - Gerenciador de arquivos de console com atalhos de teclado estilo Vim.
- [yazi](https://github.com/sxyazi/yazi) - Gerenciador de arquivos de terminal ultrarrápido escrito em Rust.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - Comando cd mais inteligente inspirado no z e potencializado por frequência.

### Gerenciadores de Pacotes & Runtimes

- [asdf](https://github.com/asdf-vm/asdf) - Gerenciador de versões extensível suportando múltiplos runtimes e ferramentas.
- [Bun](https://github.com/oven-sh/bun) - Runtime JavaScript, gerenciador de pacotes e bundler rápido.
- [Deno](https://github.com/denoland/deno) - Runtime JavaScript e TypeScript seguro construído com Rust.
- [Homebrew](https://github.com/Homebrew/brew) - Gerenciador de pacotes popular para macOS e Linux.
- [pnpm](https://github.com/pnpm/pnpm) - Gerenciador de pacotes rápido e eficiente em espaço em disco para JavaScript.

### Produtividade & Fluxo de Trabalho

- [atuin](https://github.com/atuinsh/atuin) - Sincronização e motor de busca do histórico do shell com armazenamento criptografado.
- [Glow](https://github.com/charmbracelet/glow) - Renderiza arquivos Markdown lindamente no terminal.
- [gum](https://github.com/charmbracelet/gum) - Ferramenta para criar scripts de shell elegantes e fluxos de trabalho no terminal.
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - Ferramenta CLI poderosa de gerenciamento de tarefas e produtividade.
- [wtfutil](https://github.com/wtfutil/wtf) - Painel de terminal pessoal para exibir informações de desenvolvedor.

### Shells & Ambientes de Terminal

- [Fish Shell](https://github.com/fish-shell/fish-shell) - Shell inteligente fácil de usar com autosugestões e padrões modernos.
- [Nushell](https://github.com/nushell/nushell) - Shell moderno construído em torno de dados estruturados em vez de texto simples.
- [tmux](https://github.com/tmux/tmux) - Multiplexador de terminal para gerenciar sessões e painéis persistentes.
- [Warp](https://github.com/warpdotdev/Warp) - Terminal moderno baseado em Rust com funcionalidades de IA e colaborativas.
- [WezTerm](https://github.com/wez/wezterm) - Emulador de terminal multiplataforma acelerado por GPU escrito em Rust.
- [Zellij](https://github.com/zellij-org/zellij) - Espaço de trabalho e multiplexador de terminal focado em usabilidade e extensibilidade.

### Monitoramento do Sistema & Utilitários

- [bottom](https://github.com/ClementTsang/bottom) - Monitor gráfico de processos e sistema multiplataforma inspirado no htop.
- [btop](https://github.com/aristocratos/btop) - Monitor de recursos moderno e visualmente rico para Linux, macOS e BSD.
- [dua](https://github.com/Byron/dua-cli) - Analisador rápido de uso de disco com interface interativa de terminal.
- [dust](https://github.com/bootandy/dust) - Substituto mais intuitivo para o du escrito em Rust.
- [htop](https://github.com/htop-dev/htop) - Visualizador interativo de processos e monitor do sistema.
- [procs](https://github.com/dalance/procs) - Substituto moderno para o ps com saída colorida e estruturada.

## Banco de dados

### Banco de dados de Grafos

- [Dgraph](https://github.com/hypermodeinc/dgraph) - Banco de dados de grafos distribuído com APIs nativas de GraphQL.

### Banco de dados Chave-Valor & Cache

- [Apache Ignite](https://github.com/apache/ignite) - Banco de dados distribuído em memória e plataforma de cache.
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - Armazenamento de dados moderno em memória compatível com APIs do Redis e Memcached.
- [etcd](https://github.com/etcd-io/etcd) - Armazenamento chave-valor distribuído usado para coordenação e descoberta de serviços no Kubernetes.
- [Valkey](https://github.com/valkey-io/valkey) - Fork do Redis impulsionado pela comunidade focado em desenvolvimento totalmente de código aberto.

### Banco de dados NoSQL

- [ArangoDB](https://github.com/arangodb/arangodb) - Banco de dados multi-modelo suportando modelos de dados de grafos, documentos e chave-valor.
- [Cassandra](https://github.com/apache/cassandra) - Banco de dados de colunas largas altamente escalável construído para alta disponibilidade.
- [CouchDB](https://github.com/apache/couchdb) - Banco de dados de documentos JSON distribuído com replicação e capacidades offline-first.
- [FerretDB](https://github.com/FerretDB/FerretDB) - Alternativa de código aberto ao MongoDB construída sobre PostgreSQL.
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - Banco de dados distribuído em tempo real com suporte a changefeed.

### Banco de dados Relacionais

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - Banco de dados orientado a colunas de alto desempenho para análise e observabilidade.
- [CockroachDB](https://github.com/cockroachdb/cockroach) - Banco de dados SQL distribuído focado em escalabilidade e tolerância a falhas.
- [DuckDB](https://github.com/duckdb/duckdb) - Banco de dados analítico em processo projetado para cargas de trabalho OLAP rápidas.
- [FoundationDB](https://github.com/apple/foundationdb) - Banco de dados transacional chave-valor distribuído projetado para consistência forte.
- [LibSQL](https://github.com/tursodatabase/libsql) - Fork de código aberto do SQLite focado em cargas de trabalho distribuídas e embutidas.
- [MariaDB](https://github.com/MariaDB/server) - Banco de dados relacional impulsionado pela comunidade derivado do MySQL com forte governança de código aberto.
- [PostgreSQL](https://github.com/postgres/postgres) - Banco de dados relacional avançado de código aberto conhecido por confiabilidade, extensibilidade e conformidade com SQL.
- [RisingWave](https://github.com/risingwavelabs/risingwave) - Banco de dados SQL distribuído de streaming compatível com PostgreSQL.
- [SQLite](https://github.com/sqlite/sqlite) - Banco de dados relacional embutido leve amplamente utilizado em aplicações e dispositivos móveis.
- [TiDB](https://github.com/pingcap/tidb) - Banco de dados distribuído compatível com MySQL projetado para HTAP e cargas de trabalho cloud-native.
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - Banco de dados distribuído de alto desempenho compatível com PostgreSQL para aplicações escaláveis.

### Motores de Busca & Análise

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - Motor de busca em texto completo projetado para indexação e consultas de alto desempenho.
- [Meilisearch](https://github.com/meilisearch/meilisearch) - Motor de busca rápido e amigável para desenvolvedores com tolerância a erros de digitação.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - Motor de busca e análise impulsionado pela comunidade derivado do Elasticsearch.
- [Sonic](https://github.com/valeriansaliou/sonic) - Backend de busca leve e sem esquema otimizado para velocidade.
- [Typesense](https://github.com/typesense/typesense) - Motor de busca instantânea de código aberto focado em simplicidade e desempenho.

### Banco de dados de Séries Temporais

- [QuestDB](https://github.com/questdb/questdb) - Banco de dados de séries temporais de alto desempenho focado em análise SQL rápida.
- [TDengine](https://github.com/taosdata/TDengine) - Plataforma de séries temporais projetada para dados IoT, industriais e de monitoramento.

### Banco de dados Vetoriais

- [Chroma](https://github.com/chroma-core/chroma) - Banco de dados de embeddings leve projetado para aplicações LLM.
- [LanceDB](https://github.com/lancedb/lancedb) - Banco de dados vetorial embutido otimizado para aplicações de IA e fluxos de trabalho local-first.
- [Milvus](https://github.com/milvus-io/milvus) - Banco de dados vetorial escalável construído para embeddings de aprendizado de máquina e cargas de trabalho de IA.
- [Qdrant](https://github.com/qdrant/qdrant) - Motor de busca de similaridade vetorial para aplicações de IA e busca semântica.
- [SurrealDB](https://github.com/surrealdb/surrealdb) - Banco de dados multi-modelo combinando funcionalidades de documento, grafo e relacional com suporte vetorial.
- [Weaviate](https://github.com/weaviate/weaviate) - Motor de busca vetorial de código aberto com GraphQL e capacidades nativas de IA.

## DevOps

### Contêineres & Virtualização

- [containerd](https://github.com/containerd/containerd) - Runtime de contêineres de alto desempenho utilizado pelo Kubernetes e Docker.
- [CRI-O](https://github.com/cri-o/cri-o) - Runtime de contêineres nativo do Kubernetes implementando o padrão CRI.
- [Incus](https://github.com/lxc/incus) - Gerenciador moderno de contêineres e máquinas virtuais impulsionado pela comunidade derivado do LXD.
- [LXC](https://github.com/lxc/lxc) - Runtime de contêineres Linux leve com suporte a contêineres de sistema de baixo nível.
- [Podman](https://github.com/containers/podman) - Motor de contêineres sem daemon focado em segurança e compatibilidade com OCI.

### Kubernetes & Orquestração

- [Argo CD](https://github.com/argoproj/argo-cd) - Ferramenta de entrega contínua GitOps declarativa para Kubernetes.
- [Flux](https://github.com/fluxcd/flux2) - Kit de ferramentas GitOps para manter clusters Kubernetes sincronizados com repositórios Git.
- [Helm](https://github.com/helm/helm) - Gerenciador de pacotes para aplicações Kubernetes.
- [k3s](https://github.com/k3s-io/k3s) - Distribuição leve do Kubernetes otimizada para cargas de trabalho em edge e IoT.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - A plataforma líder de orquestração de contêineres de código aberto.
- [Rancher](https://github.com/rancher/rancher) - Plataforma de gerenciamento Kubernetes para operações multi-cluster.

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - Sistema de integração contínua baseado em contêineres com pipelines declarativos.
- [GoCD](https://github.com/gocd/gocd) - Servidor de entrega contínua de código aberto focado em fluxos de trabalho complexos.
- [Jenkins](https://github.com/jenkinsci/jenkins) - Servidor de automação extensível para pipelines CI/CD.
- [Tekton](https://github.com/tektoncd/pipeline) - Framework nativo do Kubernetes para criar sistemas CI/CD.
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - Sistema CI/CD leve e totalmente de código aberto inspirado no Drone.

### Infraestrutura como Código

- [Ansible](https://github.com/ansible/ansible) - Ferramenta de automação sem agente para gerenciamento de configuração e provisionamento.
- [Atlantis](https://github.com/runatlantis/atlantis) - Automação de fluxo de trabalho GitOps para projetos Terraform e OpenTofu.
- [Crossplane](https://github.com/crossplane/crossplane) - Framework de plano de controle baseado em Kubernetes para infraestrutura na nuvem.
- [OpenTofu](https://github.com/opentofu/opentofu) - Ferramenta de infraestrutura como código impulsionada pela comunidade derivada do Terraform.
- [Pulumi](https://github.com/pulumi/pulumi) - Plataforma de infraestrutura como código usando linguagens de programação familiares.

### Monitoramento & Observabilidade

- [Jaeger](https://github.com/jaegertracing/jaeger) - Plataforma de tracing distribuído para monitoramento de microsserviços.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - Padrão aberto e ferramentas para coleta de dados de telemetria.
- [Prometheus](https://github.com/prometheus/prometheus) - Kit de monitoramento e alertas projetado para confiabilidade e escalabilidade.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Banco de dados de séries temporais e pilha de monitoramento de alto desempenho.

### Redes & Proxy Reverso

- [Caddy](https://github.com/caddyserver/caddy) - Servidor web com HTTPS automático e configuração simples.
- [CoreDNS](https://github.com/coredns/coredns) - Servidor DNS flexível e extensível comumente utilizado no Kubernetes.
- [HAProxy](https://github.com/haproxy/haproxy) - Balanceador de carga de alta disponibilidade e servidor proxy confiável.
- [Nginx](https://github.com/nginx/nginx) - Servidor web e proxy reverso de alto desempenho.
- [Traefik](https://github.com/traefik/traefik) - Proxy reverso moderno e controlador de ingress com descoberta automática de serviços.

### Segredos & Segurança

- [Falco](https://github.com/falcosecurity/falco) - Monitoramento de segurança em tempo de execução para contêineres e Kubernetes.
- [Infisical](https://github.com/Infisical/infisical) - Plataforma de gerenciamento de segredos de código aberto para equipes e infraestrutura.
- [Step CA](https://github.com/smallstep/certificates) - Autoridade de certificados privada e solução de gerenciamento TLS automatizada.
- [Trivy](https://github.com/aquasecurity/trivy) - Escaneador de segurança para contêineres, dependências, Kubernetes e IaC.

## Apps móveis

### Navegadores & Internet

- [Cromite](https://github.com/uazo/cromite) - Fork do Chromium focado em privacidade com bloqueio de anúncios.
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - Navegador móvel de código aberto desenvolvido pela Mozilla.
- [Fulguris](https://github.com/Slion/Fulguris) - Navegador Android leve focado em privacidade.
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - Cliente Reddit de código aberto para Android.
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - Fork do Firefox reforçado para privacidade no Android.

### Gerenciamento de Arquivos & Utilitários

- [Material Files](https://github.com/zhanghai/MaterialFiles) - Gerenciador de arquivos Material Design para Android.
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Cliente moderno do F-Droid para Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - Atualizador de apps diretamente do GitHub e outras fontes.
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - Utilitário de limpeza e manutenção do sistema Android.
- [Termux](https://github.com/termux/termux-app) - Emulador de terminal e ambiente Linux para Android.

### Launchers & Personalização

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - Launcher focado em busca e produtividade.
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - Launcher Android personalizável inspirado no Pixel.
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - Fork do Lawnchair com personalização aprimorada.

### Música & Mídia

- [Auxio](https://github.com/OxygenCobalt/Auxio) - Player de música local Android focado em simplicidade e desempenho.
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - Player de música local inspirado no Material You para Android.
- [InnerTune](https://github.com/z-huang/InnerTune) - Cliente moderno do YouTube Music para Android.
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - Cliente rico em funcionalidades do YouTube Music para Android com reprodução offline, letras sincronizadas e design Material 3.
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - Player de música Android com prioridade à privacidade construído com Material 3.
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - Player de música Android elegante com UI moderna.
- [RiMusic](https://github.com/fast4x/RiMusic) - Belo player de música Android alimentado pelo YouTube Music.
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - Companheiro móvel de código aberto para gerenciar bibliotecas de música pessoais.
- [Symphony](https://github.com/zyrouge/symphony) - Player de música elegante e leve baseado em Flutter.
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - Aplicativo leve de streaming de música de código aberto para Android.
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - Fork do Phonograph com experiência clássica de player de música Android.

### Mensagens & Comunicação

- [Briar](https://github.com/briar/briar) - Aplicativo de mensagens criptografadas peer-to-peer.
- [Element](https://github.com/element-hq/element-android) - Aplicativo de mensagens seguro baseado em Matrix.
- [FairEmail](https://github.com/M66B/FairEmail) - Cliente de email orientado à privacidade com personalização extensa.
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - Cliente de email de código aberto para Android.
- [Molly](https://github.com/mollyim/mollyim-android) - Fork do Signal reforçado para Android.
- [Session](https://github.com/session-foundation/session-android) - Mensageiro criptografado focado em privacidade sem números de telefone.

### Gerenciadores de Senhas & Segurança

- [Aegis](https://github.com/beemdevelopment/Aegis) - Aplicativo seguro de autenticação de dois fatores.
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - Aplicativo de autenticação de dois fatores com backups.
- [Bitwarden](https://github.com/bitwarden/android) - Gerenciador de senhas de código aberto para Android.
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - Gerenciador de senhas compatível com KeePass.
- [Proton Pass](https://github.com/protonpass/android-pass) - Gerenciador de senhas desenvolvido pela Proton.

### Produtividade & Notas

- [Joplin](https://github.com/laurent22/joplin) - Aplicativo de anotações e gerenciamento de tarefas com suporte a sincronização.
- [Logseq](https://github.com/logseq/logseq) - Aplicativo de gerenciamento de conhecimento e esquematização.
- [Markor](https://github.com/gsantner/markor) - Editor Markdown e aplicativo de anotações para Android.
- [NoteGen](https://github.com/codexu/note-gen) - Aplicativo de anotações Markdown local-first com captura, edição, sincronização opcional e organização assistida por IA.
- [Notesnook](https://github.com/streetwriters/notesnook) - Aplicativo de anotações criptografado focado em privacidade.
- [Quillpad](https://github.com/quillpad/quillpad) - Aplicativo de anotações minimalista com Material You.
- [Standard Notes](https://github.com/standardnotes/app) - Aplicativo de notas criptografado de ponta a ponta.
- [Tasks.org](https://github.com/tasks/tasks) - Aplicativo de código aberto de gerenciamento de tarefas para Android.

### Vídeo & Streaming

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - Streaming de anime e leitor de manga derivado do Mihon.
- [Grayjay](https://github.com/futo-org/grayjay-android) - Plataforma de mídia unificada suportando múltiplas fontes de conteúdo.
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - Cliente Android para o servidor de mídia Jellyfin.
- [LibreTube](https://github.com/libre-tube/LibreTube) - Cliente YouTube focado em privacidade usando Piped.
- [Mihon](https://github.com/mihonapp/mihon) - Leitor de manga de código aberto para Android.
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - Frontend leve do YouTube para Android sem dependências do Google.
- [Seal](https://github.com/JunkFood02/Seal) - Baixador de vídeo e áudio alimentado por yt-dlp.

## Segurança

### Segurança de Contêineres & Kubernetes

- [Chainguard Images](https://github.com/chainguard-images/images) - Imagens de contêineres mínimas e reforçadas focadas em segurança da cadeia de suprimentos.
- [Dockle](https://github.com/goodwithtech/dockle) - Linter de imagens de contêineres focado em melhores práticas de segurança.
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - Verificador de conformidade do benchmark CIS Kubernetes.
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Ferramenta de testes de penetração e auditoria de segurança do Kubernetes.
- [Kubescape](https://github.com/kubescape/kubescape) - Plataforma de segurança do Kubernetes para análise de riscos e verificação de conformidade.
- [Kyverno](https://github.com/kyverno/kyverno) - Motor de políticas nativo do Kubernetes para segurança, governança e conformidade.

### Segurança de Endpoint & Tempo de Execução

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - Conjunto de ferramentas para detectar rootkits em sistemas Unix.
- [Lynis](https://github.com/CISOfy/lynis) - Ferramenta de auditoria de segurança e hardening para sistemas baseados em Unix.
- [OpenEDR](https://github.com/ComodoSecurity/openedr) - Plataforma de detecção e resposta em endpoints para monitoramento e análise de ameaças.
- [Osquery](https://github.com/osquery/osquery) - Framework de instrumentação do sistema operacional expondo dados do sistema através de SQL.
- [Wazero](https://github.com/tetratelabs/wazero) - Runtime WebAssembly seguro para execução de aplicações em sandbox.

### Segurança & Monitoramento de Rede

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - IPS colaborativo e plataforma de inteligência de ameaças protegendo servidores e aplicações.
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - Distribuição Linux para detecção de intrusões, monitoramento de segurança empresarial e gerenciamento de logs.
- [Snort](https://github.com/snort3/snort3) - Sistema amplamente utilizado de prevenção e detecção de intrusões de código aberto.
- [Suricata](https://github.com/OISF/suricata) - Motor de IDS, IPS e monitoramento de segurança de rede de alto desempenho.
- [Wazuh](https://github.com/wazuh/wazuh) - Plataforma de código aberto XDR e SIEM para detecção de ameaças e conformidade.
- [Zeek](https://github.com/zeek/zeek) - Framework poderoso de análise de rede para monitoramento e visibilidade de segurança.

### Privacidade & Anonimato

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - Configuração reforçada do Firefox focada em privacidade e segurança.
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - Sistema operacional móvel baseado em Android focado em privacidade e segurança.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Firewall de aplicações e monitor de conexões de saída para Linux.
- [Tor](https://github.com/torproject/tor) - Rede sobreposta anônima para proteger a privacidade e resistir à vigilância.

### Engenharia Reversa & Pentesting

- [Amass](https://github.com/owasp-amass/amass) - Ferramenta de mapeamento de superfície de ataque e descoberta de ativos externos.
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Suíte de engenharia reversa de software desenvolvida pela NSA.
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - Framework de testes de penetração para auditoria de segurança e desenvolvimento de exploits.
- [Nmap](https://github.com/nmap/nmap) - Utilidade de descoberta de rede e auditoria de segurança.
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - Escaneador de segurança de aplicações web de código aberto mantido pela OWASP.
- [Responder](https://github.com/lgandx/Responder) - Envenenador LLMNR, NBT-NS e MDNS comumente utilizado em avaliações de rede interna.
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - Ferramenta automatizada de injeção SQL e takeover de banco de dados.
- [Wireshark](https://github.com/wireshark/wireshark) - Analisador de protocolos de rede para solução de problemas e inspeção de pacotes.
- [Hetty](https://github.com/dstotijn/hetty) - Proxy de código aberto que permite modificar pacotes.

### Gerenciamento de Segredos & Criptografia

- [age](https://github.com/FiloSottile/age) - Ferramenta simples, moderna e segura de criptografia de arquivos.
- [Cryptomator](https://github.com/cryptomator/cryptomator) - Solução de armazenamento em nuvem criptografado do lado do cliente focada em privacidade.
- [HashiCorp Vault](https://github.com/hashicorp/vault) - Plataforma de gerenciamento de segredos e criptografia para proteger dados sensíveis de infraestrutura.
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Controlador do Kubernetes para gerenciar segredos criptografados de forma segura em repositórios Git.
- [SOPS](https://github.com/getsops/sops) - Ferramenta para criptografar e gerenciar arquivos de configuração estruturados e segredos.

### Verificação & Análise de Vulnerabilidades

- [Clair](https://github.com/quay/clair) - Ferramenta de análise estática para identificar vulnerabilidades em imagens de contêineres.
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - Plataforma de segurança da cadeia de suprimentos de software para análise SBOM e rastreamento de vulnerabilidades.
- [Grype](https://github.com/anchore/grype) - Verificador de vulnerabilidades para imagens de contêineres e sistemas de arquivos.
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - Framework de conformidade de segurança e verificação de vulnerabilidades implementando padrões SCAP.
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - Ferramenta para detectar dependências vulneráveis em projetos de software.
- [Semgrep](https://github.com/semgrep/semgrep) - Ferramenta de análise estática para encontrar problemas de segurança no código fonte.

## Self-Hosted

### Plataformas de Desenvolvimento & Serviços Git

- [Gitea](https://github.com/go-gitea/gitea) - Serviço Git simples, leve e auto-hospedado.
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - Plataforma DevOps completa com controle de versão e funcionalidades CI/CD.
- [Onedev](https://github.com/theonedev/onedev) - Servidor Git tudo-em-um com CI/CD e rastreamento de issues.

### DNS, Redes & Privacidade

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - Servidor DNS auto-hospedado com bloqueio de anúncios e rastreadores.
- [Headscale](https://github.com/juanfont/headscale) - Servidor de coordenação de código aberto auto-hospedado compatível com clientes Tailscale.
- [NetBird](https://github.com/netbirdio/netbird) - Plataforma de redes seguras baseada em WireGuard para conectividade privada.
- [Pi-hole](https://github.com/pi-hole/pi-hole) - Bloqueador de anúncios e poço DNS em toda a rede para melhorar a privacidade.
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - Servidor DNS poderoso de código aberto com suporte a protocolos modernos.

### Homelab & Gerenciamento de Servidores

- [CapRover](https://github.com/caprover/caprover) - Plataforma PaaS auto-hospedada leve para implantar aplicações web com Docker.
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) - Sistema operacional de nuvem pessoal simples e amigável para iniciantes para apps auto-hospedados.
- [Coolify](https://github.com/coollabsio/coolify) - Alternativa de código aberto auto-hospedável ao Heroku, Netlify e Vercel.
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - Portal auto-hospedado para gerenciar apps, proxy reverso e autenticação em uma única interface.
- [Dokploy](https://github.com/Dokploy/dokploy) - Plataforma de implantação moderna auto-hospedada construída para Docker e ambientes VPS.
- [Umbrel](https://github.com/getumbrel/umbrel) - Plataforma de servidor pessoal para executar aplicações e serviços auto-hospedados.
- [YunoHost](https://github.com/YunoHost/yunohost) - Plataforma de auto-hospedagem baseada em Debian focada em simplicidade e privacidade.

### Servidores de Mídia & Streaming

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - Servidor auto-hospedado de audiolivros e podcasts com apps modernos e suporte a metadados.
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - Suíte de gerenciamento de rádio web para estações de rádio internet auto-hospedadas.
- [Jellyfin](https://github.com/jellyfin/jellyfin) - Servidor de mídia totalmente de código aberto para filmes, séries, música e TV ao vivo.
- [Navidrome](https://github.com/navidrome/navidrome) - Servidor de streaming de música auto-hospedado leve compatível com clientes Subsonic.
- [Owncast](https://github.com/owncast/owncast) - Servidor de streaming ao vivo auto-hospedado com chat e suporte a federação.
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - Servidor de mídia YouTube auto-hospedado e plataforma de arquivamento de vídeos.

### Monitoramento & Uptime

- [Beszel](https://github.com/henrygd/beszel) - Plataforma leve de monitoramento de servidores com suporte Docker.
- [Checkmk](https://github.com/Checkmk/checkmk) - Solução abrangente de monitoramento de TI para servidores, contêineres e redes.
- [Netdata](https://github.com/netdata/netdata) - Plataforma de monitoramento e solução de problemas de infraestrutura em tempo real.
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - Ferramenta de monitoramento de uptime auto-hospedada com páginas de status e notificações.

### Gerenciadores de Senhas & Autenticação

- [Authentik](https://github.com/goauthentik/authentik) - Provedor de identidade e plataforma de autenticação auto-hospedada.
- [Kanidm](https://github.com/kanidm/kanidm) - Servidor moderno de gerenciamento de identidade focado em segurança e simplicidade.
- [LLDAP](https://github.com/lldap/lldap) - Servidor LDAP leve para equipes pequenas e configurações de homelab.
- [Passbolt](https://github.com/passbolt/passbolt_api) - Gerenciador de senhas de código aberto projetado para colaboração em equipe.
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Servidor de gerenciador de senhas compatível com Bitwarden escrito em Rust.

### Fotos & Gerenciamento de Arquivos

- [File Browser](https://github.com/filebrowser/filebrowser) - Gerenciador de arquivos baseado na web para gerenciar arquivos em servidores remotos.
- [Immich](https://github.com/immich-app/immich) - Solução de backup de fotos e vídeos auto-hospedada de alto desempenho inspirada no Google Photos.
- [PhotoPrism](https://github.com/photoprism/photoprism) - Aplicativo de gerenciamento de fotos auto-hospedado com IA.
- [Piwigo](https://github.com/Piwigo/Piwigo) - Plataforma de galeria de fotos de código aberto com suporte a plugins.
- [Syncthing](https://github.com/syncthing/syncthing) - Aplicativo descentralizado de sincronização contínua de arquivos.

### RSS, Ler Depois & Conhecimento

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - Agregador de feeds RSS leve e auto-hospedado.
- [Hoarder](https://github.com/hoarder-app/hoarder) - Gerenciador de favoritos auto-hospedado com organização assistida por IA.
- [Karakeep](https://github.com/karakeep-app/karakeep) - Plataforma moderna de bookmarking e gerenciamento de conhecimento auto-hospedada.
- [Miniflux](https://github.com/miniflux/v2) - Leitor RSS minimalista focado em desempenho e simplicidade.
- [Wallabag](https://github.com/wallabag/wallabag) - Aplicativo auto-hospedado de ler depois para salvar artigos da web.

## Software / SaaS

### Análise & Monitoramento

- [OpenReplay](https://github.com/openreplay/openreplay) - Plataforma de replay de sessões e análise de produto para depurar problemas de usuários.
- [Plausible Analytics](https://github.com/plausible/analytics) - Plataforma de análise web leve e amigável à privacidade.
- [Signoz](https://github.com/SigNoz/signoz) - Plataforma de código aberto de observabilidade para métricas, traces e logs.
- [Umami](https://github.com/umami-software/umami) - Alternativa ao Google Analytics focada em privacidade para análise web.

### Automação & Ferramentas Internas

- [Appsmith](https://github.com/appsmithorg/appsmith) - Framework de código aberto para criar aplicações internas rapidamente.
- [Budibase](https://github.com/Budibase/budibase) - Plataforma low-code para ferramentas internas, formulários e painéis operacionais.
- [n8n](https://github.com/n8n-io/n8n) - Plataforma de automação de fluxo de trabalho com auto-hospedagem e integrações extensíveis.
- [ToolJet](https://github.com/ToolJet/ToolJet) - Plataforma low-code para construir ferramentas internas e painéis de administração.

### Comunicação & Suporte

- [Chatwoot](https://github.com/chatwoot/chatwoot) - Plataforma de engajamento e suporte ao cliente com chat ao vivo e caixas de entrada omnichannel.
- [Formbricks](https://github.com/formbricks/formbricks) - Plataforma de código aberto de gerenciamento de experiência e feedback de produto.
- [Papercups](https://github.com/papercups-io/papercups) - Plataforma de código aberto de chat ao vivo e mensagens de clientes.
- [Typebot](https://github.com/baptisteArno/typebot.io) - Construtor de formulários conversacionais para criar fluxos de trabalho interativos estilo chat.

### Documentação & Bases de Conhecimento

- [Docs](https://github.com/suitenumerique/docs) - Plataforma colaborativa de edição de documentos focada em privacidade e auto-hospedagem.
- [Documenso](https://github.com/documenso/documenso) - Plataforma de código aberto de assinatura de documentos como alternativa ao DocuSign.
- [Outline](https://github.com/outline/outline) - Base de conhecimento e plataforma de documentação colaborativa para equipes.
- [Wiki.js](https://github.com/requarks/wiki) - Plataforma wiki de código aberto poderosa e extensível.

### Armazenamento de Arquivos & Nuvem

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - Sistema de armazenamento em nuvem auto-hospedado suportando múltiplos provedores de armazenamento.
- [Filestash](https://github.com/mickael-kerjean/filestash) - Cliente web moderno para gerenciar arquivos em múltiplos backends de armazenamento.
- [Nextcloud](https://github.com/nextcloud/server) - Nuvem de produtividade auto-hospedada com sincronização de arquivos, ferramentas de colaboração e comunicação.
- [Seafile](https://github.com/haiwen/seafile) - Plataforma de alto desempenho de hospedagem e sincronização de arquivos de código aberto.

### Produtividade & Colaboração

- [AFFiNE](https://github.com/toeverything/AFFiNE) - Espaço de trabalho colaborativo tudo-em-um combinando documentos, quadros brancos e bancos de dados.
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - Plataforma de código aberto de workspace e gerenciamento de conhecimento posicionada como alternativa ao Notion.
- [Erxes](https://github.com/erxes/erxes) - Plataforma de código aberto de marketing de crescimento, vendas e engajamento de clientes.
- [Focalboard](https://github.com/mattermost/focalboard) - Ferramenta auto-hospedada de gerenciamento de projetos e tarefas inspirada no Trello e Notion.
- [Plane](https://github.com/makeplane/plane) - Plataforma de código aberto de gerenciamento de projetos e rastreamento de issues.
- [Twenty](https://github.com/twentyhq/twenty) - Plataforma CRM moderna de código aberto focada em extensibilidade e propriedade.

## Desenvolvimento Web

### Bibliotecas UI para Angular

- [Angular Material](https://github.com/angular/components) - Biblioteca de componentes Material Design para Angular mantida pelo Google.
- [PrimeNG](https://github.com/primefaces/primeng) - Rica biblioteca de componentes UI Angular com alto desempenho e amplas opções de personalização.
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - Kit UI Angular de código aberto poderoso com grande conjunto de componentes e ferramentas.
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - Template de painel admin Angular de código aberto construído com Tailwind CSS.

### Editores de Código

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - Plataforma de IDE de código aberto flexível utilizada em ambientes de nuvem e desktop.
- [Helix](https://github.com/helix-editor/helix) - Editor modal em rápido crescimento com suporte LSP integrado e padrões modernos.
- [Neovim](https://github.com/neovim/neovim) - Editor baseado no Vim altamente popular e extensível focado em desempenho e fluxos de trabalho modernos.
- [Visual Studio Code](https://github.com/microsoft/vscode) - O editor de código de código aberto mais utilizado com um ecossistema massivo de extensões.
- [VSCodium](https://github.com/VSCodium/vscodium) - Distribuição totalmente de código aberto do VS Code sem componentes proprietários.
- [Zed](https://github.com/zed-industries/zed) - Editor colaborativo de alto desempenho em rápida adoção.

### Ferramentas de Design

- [Excalidraw](https://github.com/excalidraw/excalidraw) - Quadro virtual para esboçar diagramas estilo desenho à mão com colaboração em tempo real e canvas infinito.
- [Open Design](https://github.com/nexu-io/open-design) - Ferramenta de design local-first com IA com 19 habilidades e 71 sistemas de design de grau de marca para gerar artefatos web, móveis e de slides.
- [open-pencil](https://github.com/open-pencil/open-pencil) - Editor de design compatível com Figma nativo de IA com CLI sem cabeça, servidor MCP e exportação de design para código.

### Ícones

- [Bootstrap Icons](https://github.com/twbs/icons) - Biblioteca de ícones oficial do Bootstrap.
- [Boxicons](https://github.com/atisawd/boxicons) - Biblioteca de ícones simples e flexível.
- [css.gg](https://github.com/astrit/css.gg) - Sistema de ícones CSS e SVG de código aberto.
- [Feather Icons](https://github.com/feathericons/feather) - Ícones mínimos e limpos de código aberto.
- [Heroicons](https://github.com/tailwindlabs/heroicons) - Conjunto de ícones oficial do Tailwind CSS (contorno e sólido).
- [Ionicons](https://github.com/ionic-team/ionicons) - Pacote de ícones para Ionic e uso geral.
- [Lucide Animated](https://github.com/pqoqubbw/icons) - Bela coleção de ícones React animados construídos com Motion e Lucide.
- [React Icons](https://github.com/react-icons/react-icons) - Pacotes de ícones populares como componentes React.
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - Biblioteca de ícones de código aberto estilo sistema.
- [Simple Icons](https://github.com/simple-icons/simple-icons) - Ícones de marcas e logotipos em formato SVG.
- [Tabler Icons](https://github.com/tabler/tabler-icons) - Conjunto de ícones grande, consistente e ativamente mantenido.

### Bibliotecas UI para React

- [Ant Design](https://github.com/ant-design/ant-design) - Sistema de design de nível empresarial com componentes React robustos e consistentes.
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - Biblioteca modular focada em acessibilidade e ótima experiência de desenvolvedor.
- [Material-UI (MUI)](https://github.com/mui/material-ui) - Biblioteca de componentes React baseada no Material Design, altamente personalizável e amplamente adotada.
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - Sistema de componentes utility-first para construir UIs consistentes em móvel e web.
- [PrimeReact](https://github.com/primefaces/primereact) - Suíte abrangente de componentes UI React ricos, flexíveis e agnósticos de design.
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Componentes Bootstrap reconstruídos para React sem dependência do jQuery.
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - Integração oficial do React para Semantic UI com componentes declarativos.

### Componentes UI

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - Biblioteca de componentes UI retro estilo 8-bit de código aberto.
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - Componentes reutilizáveis de animação de carregamento estilo dotmatrix instaláveis via registro shadcn ou cópia manual.
- [Flowbite](https://github.com/themesberg/flowbite) - Biblioteca de componentes UI de código aberto baseada no Tailwind CSS com elementos interativos.
- [Headless UI](https://github.com/tailwindlabs/headlessui) - Primitivas UI sem estilo totalmente acessíveis projetadas para Tailwind CSS.
- [LangUI](https://github.com/CommandCodeAI/langui) - Componentes de código aberto Tailwind CSS para interfaces de IA e estilo GPT.
- [loading-ui](https://github.com/turbostarter/loading-ui) - Belos estados de carregamento, esqueletos e marcadores de posição animados de código aberto construídos para apps React modernos com Tailwind CSS.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - Componentes UI de código aberto copiar-e-colar para React construídos sobre Tailwind CSS.
- [uiverse](https://github.com/uiverse-io/galaxy) - Elementos UI de código aberto impulsionados pela comunidade construídos com HTML e CSS.

### Bibliotecas UI para Vue

- [Quasar](https://github.com/quasarframework/quasar) - Framework Vue completo para construir SPAs, SSR, apps móveis e de desktop.
- [Vuetify](https://github.com/vuetifyjs/vuetify) - Framework de componentes Material Design para Vue com grande ecossistema.

## Contribuindo

Contribuições são bem-vindas! Se você gostaria de contribuir:

1. Faça um fork deste repositório e crie uma nova branch: `feat/project-name`
2. Adicione sua entrada na seção apropriada em `README.md` seguindo o formato abaixo.
3. Faça push para a branch (`git push origin feat/project-name`)
4. Abra um Pull Request com um título como `feat: Project Name` e uma breve explicação de por que ele pertence.

Para mais informações sobre contribuir, por favor consulte nossas [Diretrizes de Contribuição](CONTRIBUTING.md).

- ❤️ Obrigado por contribuir para o projeto! Sua ajuda é muito apreciada.

<div align="center">
  
  <h3>Contribuidores</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
