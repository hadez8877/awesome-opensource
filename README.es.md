<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    Una colección de <strong>recursos verdaderamente de codigo abierto</strong> &mdash;
    <br/>
    porque también estoy cansado de proyectos que no son realmente de codigo abierto.
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

## Contenido

<!--lint disable awesome-list-item-->

- [Backend / BaaS](#backend--baas)
  - [API & GraphQL](#api--graphql)
  - [Autenticación & Identidad](#autenticacion--identidad)
  - [Backend as a Service](#backend-as-a-service)
  - [Frameworks](#frameworks)
- [Herramientas CLI](#herramientas-cli)
  - [Herramientas de Desarrollo](#herramientas-de-desarrollo)
  - [Gestión de Archivos & Navegación](#gestion-de-archivos--navegacion)
  - [Gestores de Paquetes & Entornos de Ejecucion](#gestores-de-paquetes--entornos-de-ejecucion)
  - [Productividad & Flujo de Trabajo](#productividad--flujo-de-trabajo)
  - [Shells & Entornos de Terminal](#shells--entornos-de-terminal)
  - [Monitoreo de Sistema & Utilidades](#monitoreo-de-sistema--utilidades)
- [Bases de Datos](#bases-de-datos)
  - [Bases de Datos de Grafo](#bases-de-datos-de-grafo)
  - [Bases de Datos Clave-Valor & Caché](#bases-de-datos-clave-valor--cache)
  - [Bases de Datos NoSQL](#bases-de-datos-nosql)
  - [Bases de Datos Relacionales](#bases-de-datos-relacionales)
  - [Motores de Búsqueda & Analítica](#motores-de-busqueda--analitica)
  - [Bases de Datos de Series Temporales](#bases-de-datos-de-series-temporales)
  - [Bases de Datos Vectoriales](#bases-de-datos-vectoriales)
- [DevOps](#devops)
  - [Contenedores & Virtualización](#contenedores--virtualizacion)
  - [Kubernetes & Orquestación](#kubernetes--orquestacion)
  - [CI / CD](#ci--cd)
  - [Infraestructura como Código](#infraestructura-como-codigo)
  - [Monitoreo & Observabilidad](#monitoreo--observabilidad)
  - [Redes & Proxy Inverso](#redes--proxy-inverso)
  - [Secretos & Seguridad](#secretos--seguridad)
- [Aplicaciones Móviles](#apps-móviles)
  - [Navegadores & Internet](#navegadores--internet)
  - [Gestion de Archivos & Utilidades](#gestion-de-archivos--utilidades)
  - [Lanzadores & Personalización](#launchers--personalizacion)
  - [Multimedia & Musica](#multimedia--musica)
  - [Mensajeria & Comunicacion](#mensajeria--comunicacion)
  - [Gestores de Contrasenas & Seguridad](#gestores-de-contrasenas--seguridad)
  - [Productividad & Notas](#productividad--notas)
  - [Video & Streaming](#video--streaming)
- [Seguridad](#seguridad)
  - [Seguridad de Contenedores & Kubernetes](#seguridad-de-contenedores--kubernetes)
  - [Seguridad de Endpoint & Tiempo de Ejecucion](#seguridad-de-endpoint--tiempo-de-ejecucion)
  - [Seguridad & Monitoreo de Red](#seguridad--monitoreo-de-red)
  - [Privacidad & Anonimato](#privacidad--anonimato)
  - [Ingenieria inversa & Pentesting](#ingenieria-inversa--pentesting)
  - [Gestion de Secretos & Encriptacion](#gestion-de-secretos--encriptacion)
  - [Escaneo & Analisis de Vulnerabilidades](#escaneo--analisis-de-vulnerabilidades)
- [Autoalojado](#autoalojado)
  - [Plataformas de Desarrollo & Servicios Git](#plataformas-de-desarrollo--servicios-git)
  - [DNS, Redes & Privacidad](#dns-redes--privacidad)
  - [Homelab & Gestion de Servidores](#homelab--gestion-de-servidores)
  - [Servidores de Medios & Streaming](#servidores-de-medios--streaming)
  - [Monitoreo & Disponibilidad](#monitoreo--uptime)
  - [Gestores de Contrasenas & Autenticacion](#gestores-de-contrasenas--autenticacion)
  - [Fotos & Gestion de Archivos](#fotos--gestion-de-archivos)
  - [RSS, Leer Despues & Conocimiento](#rss-leer-despues--conocimiento)
- [Software / SaaS](#software--saas)
  - [Analitica & Monitoreo](#analitica--monitoreo)
  - [Automatizacion & Herramientas Internas](#automatizacion--herramientas-internas)
  - [Comunicacion & Soporte](#comunicacion--soporte)
  - [Documentacion & Bases de Conocimiento](#documentacion--bases-de-conocimiento)
  - [Almacenamiento de Archivos & Nube](#almacenamiento-de-archivos--nube)
  - [Productividad & Colaboracion](#productividad--colaboracion)
- [Desarrollo Web](#desarrollo-web)
  - [Librerias UI para Angular](#librerias-ui-de-angular)
  - [Editores de Codigo](#editores-de-codigo)
  - [Herramientas de Diseno](#herramientas-de-diseno)
  - [Iconos](#iconos)
  - [Librerias UI para React](#librerias-ui-de-react)
  - [Componentes UI](#componentes-ui)
  - [Librerias UI para Vue](#librerias-ui-de-vue)

## Backend / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - Servidor GraphQL moderno y ligero.
- [PostgREST](https://github.com/PostgREST/postgrest) - Convierte PostgreSQL instantaneamente en una API REST.
- [tRPC](https://github.com/trpc/trpc) - APIs tipadas de extremo a extremo sin esquemas.

### Autenticacion & Identidad

- [Authelia](https://github.com/authelia/authelia) - Solución de autenticación multifactor autoalojada.
- [Keycloak](https://github.com/keycloak/keycloak) - Solución IAM de codigo abierto completa (SSO, OAuth2, OIDC, SAML) respaldada por Red Hat.
- [Ory Kratos](https://github.com/ory/kratos) - Sistema de autenticación enfocado en seguridad con un núcleo completamente de codigo abierto.

### Backend as a Service

- [Parse Server](https://github.com/parse-community/parse-server) - Backend de codigo abierto maduro sin funciones críticas cerradas.
- [PocketBase](https://github.com/pocketbase/pocketbase) - Backend embebido con SQLite, autenticación y API REST, completamente de codigo abierto.
- [Supabase](https://github.com/supabase/supabase) - Alternativa de codigo abierto a Firebase construida sobre PostgreSQL.
- [UnDB](https://github.com/undb-io/undb) - Base de datos no-code y BaaS autoalojada (basada en SQLite, tipo Airtable).

### Frameworks

- [AdonisJS](https://github.com/adonisjs/core) - Framework moderno de Node.js con enfoque TypeScript-first.
- [Elysia](https://github.com/elysiajs/elysia) - Framework de alto rendimiento first-class para Bun con tipado fuerte.
- [FeathersJS](https://github.com/feathersjs/feathers) - Framework flexible para aplicaciones REST y en tiempo real.
- [Hono](https://github.com/honojs/hono) - Framework ultrarrápido para entornos modernos (Edge, Bun, Deno, Node).
- [LoopBack](https://github.com/loopbackio/loopback-next) - Framework API avanzado basado en OpenAPI.
- [Midway](https://github.com/midwayjs/midway) - Framework de Node.js con inyección de dependencias inspirado en Spring.
- [Moleculer](https://github.com/moleculerjs/moleculer) - Framework rápido y potente de microservicios.
- [Wasp](https://github.com/wasp-lang/wasp) - Framework fullstack declarativo que genera el backend automáticamente.

## Herramientas CLI

### Herramientas de Desarrollo

- [bat](https://github.com/sharkdp/bat) - Clon de cat con resaltado de sintaxis e integracion con Git.
- [delta](https://github.com/dandavison/delta) - Visor de paginas con resaltado de sintaxis para salidas de Git y diff.
- [fd](https://github.com/sharkdp/fd) - Alternativa simple, rápida y fácil de usar a `find`.
- [httpie](https://github.com/httpie/cli) - Cliente HTTP de línea de comandos fácil de usar para APIs y servicios web.
- [hyperfine](https://github.com/sharkdp/hyperfine) - Herramienta de benchmarking de línea de comandos con análisis estadístico.
- [jq](https://github.com/jqlang/jq) - Procesador de JSON ligero y flexible para la terminal.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Interfaz de terminal para Docker y gestion de contenedores.
- [lazygit](https://github.com/jesseduffield/lazygit) - Interfaz simple de terminal para operaciones de Git.
- [ripgrep](https://github.com/BurntSushi/ripgrep) - Herramienta de búsqueda recursiva ultrarrápida que respeta .gitignore.
- [xh](https://github.com/ducaale/xh) - Cliente HTTP amigable y rápido diseñado como alternativa a HTTPie.
- [yq](https://github.com/mikefarah/yq) - Procesador portátil de YAML, JSON, XML y TOML inspirado en jq.

### Gestion de Archivos & Navegacion

- [broot](https://github.com/Canop/broot) - Navegador interactivo de árbol de directorios con búsqueda difusa.
- [fzf](https://github.com/junegunn/fzf) - Buscador difuso de propósito general para la línea de comandos.
- [nnn](https://github.com/jarun/nnn) - Explorador de archivos de terminal ligero y extremadamente rápido.
- [ranger](https://github.com/ranger/ranger) - Gestor de archivos de consola con atajos de teclado estilo Vim.
- [yazi](https://github.com/sxyazi/yazi) - Gestor de archivos de terminal ultrarrápido escrito en Rust.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - Comando cd mas inteligente inspirado en z y potenciado por frecuencia.

### Gestores de Paquetes & Entornos de Ejecucion

- [asdf](https://github.com/asdf-vm/asdf) - Gestor de versiones extensible que soporta multiples entornos de ejecución y herramientas.
- [Bun](https://github.com/oven-sh/bun) - Entorno de ejecución JavaScript, gestor de paquetes y bundler rápido.
- [Deno](https://github.com/denoland/deno) - Entorno de ejecución seguro de JavaScript y TypeScript construido con Rust.
- [Homebrew](https://github.com/Homebrew/brew) - Gestor de paquetes popular para macOS y Linux.
- [pnpm](https://github.com/pnpm/pnpm) - Gestor de paquetes rápido y eficiente en espacio de disco para JavaScript.

### Productividad & Flujo de Trabajo

- [atuin](https://github.com/atuinsh/atuin) - Sincronización y motor de búsqueda del historial de shell con almacenamiento encriptado.
- [Glow](https://github.com/charmbracelet/glow) - Renderiza archivos Markdown de forma hermosa en la terminal.
- [gum](https://github.com/charmbracelet/gum) - Herramienta para crear scripts de shell elegantes y flujos de trabajo en terminal.
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - Herramienta CLI potente de gestion de tareas y productividad.
- [wtfutil](https://github.com/wtfutil/wtf) - Panel de terminal personal para mostrar informacion de desarrollador.

### Shells & Entornos de Terminal

- [Fish Shell](https://github.com/fish-shell/fish-shell) - Shell inteligente fácil de usar con autosugerencias y valores predeterminados modernos.
- [Nushell](https://github.com/nushell/nushell) - Shell moderno construido alrededor de datos estructurados en lugar de texto plano.
- [tmux](https://github.com/tmux/tmux) - Multiplexor de terminal para gestionar sesiones persistentes y paneles.
- [Warp](https://github.com/warpdotdev/Warp) - Terminal moderno basado en Rust con funciones de IA y colaborativas.
- [WezTerm](https://github.com/wez/wezterm) - Emulador de terminal multiplataforma acelerado por GPU escrito en Rust.
- [Zellij](https://github.com/zellij-org/zellij) - Espacio de trabajo y multiplexor de terminal enfocado en usabilidad y extensibilidad.

### Monitoreo del Sistema & Utilidades

- [bottom](https://github.com/ClementTsang/bottom) - Monitor gráfico de procesos y sistema multiplataforma inspirado en htop.
- [btop](https://github.com/aristocratos/btop) - Monitor de recursos moderno y visualmente rico para Linux, macOS y BSD.
- [dua](https://github.com/Byron/dua-cli) - Analizador rápido de uso de disco con interfaz interactiva de terminal.
- [dust](https://github.com/bootandy/dust) - Reemplazo mas intuitivo para du escrito en Rust.
- [htop](https://github.com/htop-dev/htop) - Visor interactivo de procesos y monitor del sistema.
- [procs](https://github.com/dalance/procs) - Reemplazo moderno para ps con salida coloreada y estructurada.

## Bases de datos

### Bases de datos de Grafos

- [Dgraph](https://github.com/hypermodeinc/dgraph) - Base de datos grafica distribuida con APIs nativas de GraphQL.

### Bases de datos Clave-Valor & Cache

- [Apache Ignite](https://github.com/apache/ignite) - Base de datos distribuida en memoria y plataforma de cache.
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - Almacenamiento de datos moderno en memoria compatible con APIs de Redis y Memcached.
- [etcd](https://github.com/etcd-io/etcd) - Almacenamiento clave-valor distribuido usado para coordinación y descubrimiento de servicios en Kubernetes.
- [Valkey](https://github.com/valkey-io/valkey) - Fork de Redis impulsado por la comunidad enfocado en desarrollo completamente de codigo abierto.

### Bases de datos NoSQL

- [ArangoDB](https://github.com/arangodb/arangodb) - Base de datos multi-modelo que soporta modelos de datos de grafos, documentos y clave-valor.
- [Cassandra](https://github.com/apache/cassandra) - Base de datos de columnas anchas altamente escalable diseñada para alta disponibilidad.
- [CouchDB](https://github.com/apache/couchdb) - Base de datos de documentos JSON distribuida con replicación y capacidades offline-first.
- [FerretDB](https://github.com/FerretDB/FerretDB) - Alternativa de codigo abierto a MongoDB construida sobre PostgreSQL.
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - Base de datos distribuida en tiempo real con soporte de changefeed.

### Bases de datos Relacionales

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - Base de datos orientada a columnas de alto rendimiento para analitica y observabilidad.
- [CockroachDB](https://github.com/cockroachdb/cockroach) - Base de datos SQL distribuida enfocada en escalabilidad y tolerancia a fallos.
- [DuckDB](https://github.com/duckdb/duckdb) - Base de datos analitica en proceso diseñada para cargas de trabajo OLAP rápidas.
- [FoundationDB](https://github.com/apple/foundationdb) - Base de datos clave-valor transaccional distribuida diseñada para consistencia fuerte.
- [LibSQL](https://github.com/tursodatabase/libsql) - Fork de codigo abierto de SQLite enfocado en cargas de trabajo distribuidas y embebidas.
- [MariaDB](https://github.com/MariaDB/server) - Base de datos relacional impulsada por la comunidad bifurcada de MySQL con fuerte gobernanza de codigo abierto.
- [PostgreSQL](https://github.com/postgres/postgres) - Base de datos relacional avanzada de codigo abierto conocida por su fiabilidad, extensibilidad y cumplimiento de SQL.
- [RisingWave](https://github.com/risingwavelabs/risingwave) - Base de datos SQL distribuida de streaming compatible con PostgreSQL.
- [SQLite](https://github.com/sqlite/sqlite) - Base de datos relacional embebida ligera ampliamente utilizada en aplicaciones y dispositivos móviles.
- [TiDB](https://github.com/pingcap/tidb) - Base de datos distribuida compatible con MySQL diseñada para HTAP y cargas de trabajo cloud-native.
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - Base de datos distribuida de alto rendimiento compatible con PostgreSQL para aplicaciones escalables.

### Motores de Busqueda & Analitica

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - Motor de búsqueda de texto completo diseñado para indexación y consultas de alto rendimiento.
- [Meilisearch](https://github.com/meilisearch/meilisearch) - Motor de búsqueda rápido y amigable para desarrolladores con tolerancia a errores de escritura.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - Motor de búsqueda y analitica impulsado por la comunidad bifurcado de Elasticsearch.
- [Sonic](https://github.com/valeriansaliou/sonic) - Backend de búsqueda ligero y sin esquema optimizado para velocidad.
- [Typesense](https://github.com/typesense/typesense) - Motor de búsqueda instantanea de codigo abierto enfocado en simplicidad y rendimiento.

### Bases de datos de Series Temporales

- [QuestDB](https://github.com/questdb/questdb) - Base de datos de series temporales de alto rendimiento enfocada en analitica SQL rápida.
- [TDengine](https://github.com/taosdata/TDengine) - Plataforma de series temporales diseñada para datos IoT, industriales y de monitoreo.

### Bases de datos Vectoriales

- [Chroma](https://github.com/chroma-core/chroma) - Base de datos de embeddings ligera diseñada para aplicaciones LLM.
- [LanceDB](https://github.com/lancedb/lancedb) - Base de datos vectorial embebida optimizada para aplicaciones de IA y flujos de trabajo local-first.
- [Milvus](https://github.com/milvus-io/milvus) - Base de datos vectorial escalable construida para embeddings de aprendizaje automático y cargas de trabajo de IA.
- [Qdrant](https://github.com/qdrant/qdrant) - Motor de búsqueda de similitud vectorial para aplicaciones de IA y búsqueda semántica.
- [SurrealDB](https://github.com/surrealdb/surrealdb) - Base de datos multi-modelo que combina documentos, grafos y caracteristicas relacionales con soporte vectorial.
- [Weaviate](https://github.com/weaviate/weaviate) - Motor de búsqueda vectorial de codigo abierto con GraphQL y capacidades nativas de IA.

## DevOps

### Contenedores & Virtualizacion

- [containerd](https://github.com/containerd/containerd) - Runtime de contenedores de alto rendimiento utilizado por Kubernetes y Docker.
- [CRI-O](https://github.com/cri-o/cri-o) - Runtime de contenedores nativo de Kubernetes que implementa el estandar CRI.
- [Incus](https://github.com/lxc/incus) - Gestor moderno de contenedores y maquinas virtuales impulsado por la comunidad bifurcado de LXD.
- [LXC](https://github.com/lxc/lxc) - Runtime de contenedores Linux ligero con soporte de contenedores de sistema de bajo nivel.
- [Podman](https://github.com/containers/podman) - Motor de contenedores sin daemon enfocado en seguridad y compatibilidad con OCI.

### Kubernetes & Orquestacion

- [Argo CD](https://github.com/argoproj/argo-cd) - Herramienta de entrega continua GitOps declarativa para Kubernetes.
- [Flux](https://github.com/fluxcd/flux2) - Kit de herramientas GitOps para mantener clusters Kubernetes sincronizados con repositorios Git.
- [Helm](https://github.com/helm/helm) - Gestor de paquetes para aplicaciones Kubernetes.
- [k3s](https://github.com/k3s-io/k3s) - Distribucion de Kubernetes ligera optimizada para cargas de trabajo en edge e IoT.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - La plataforma lider de orquestacion de contenedores de codigo abierto.
- [Rancher](https://github.com/rancher/rancher) - Plataforma de gestion de Kubernetes para operaciones multi-cluster.

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - Sistema de integracion continua basado en contenedores con pipelines declarativos.
- [GoCD](https://github.com/gocd/gocd) - Servidor de entrega continua de codigo abierto enfocado en flujos de trabajo complejos.
- [Jenkins](https://github.com/jenkinsci/jenkins) - Servidor de automatización extensible para pipelines CI/CD.
- [Tekton](https://github.com/tektoncd/pipeline) - Framework nativo de Kubernetes para crear sistemas CI/CD.
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - Sistema CI/CD ligero y completamente de codigo abierto inspirado en Drone.

### Infraestructura como Codigo

- [Ansible](https://github.com/ansible/ansible) - Herramienta de automatización sin agente para gestion de configuracion y aprovisionamiento.
- [Atlantis](https://github.com/runatlantis/atlantis) - Automatizacion de flujos de trabajo GitOps para proyectos Terraform y OpenTofu.
- [Crossplane](https://github.com/crossplane/crossplane) - Framework de plano de control basado en Kubernetes para infraestructura en la nube.
- [OpenTofu](https://github.com/opentofu/opentofu) - Herramienta de infraestructura como codigo impulsada por la comunidad bifurcada de Terraform.
- [Pulumi](https://github.com/pulumi/pulumi) - Plataforma de infraestructura como codigo que utiliza lenguajes de programacion familiares.

### Monitoreo & Observabilidad

- [Jaeger](https://github.com/jaegertracing/jaeger) - Plataforma de tracing distribuido para monitoreo de microservicios.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - Estandar abierto e herramientas para recoleccion de datos de telemetria.
- [Prometheus](https://github.com/prometheus/prometheus) - Kit de monitoreo y alertas diseñado para fiabilidad y escalabilidad.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - Base de datos de series temporales y pila de monitoreo de alto rendimiento.

### Redes & Proxy Inverso

- [Caddy](https://github.com/caddyserver/caddy) - Servidor web con HTTPS automatico y configuracion simple.
- [CoreDNS](https://github.com/coredns/coredns) - Servidor DNS flexible y extensible comunmente utilizado en Kubernetes.
- [HAProxy](https://github.com/haproxy/haproxy) - Balanceador de carga y servidor proxy de alta disponibilidad confiable.
- [Nginx](https://github.com/nginx/nginx) - Servidor web y proxy inverso de alto rendimiento.
- [Traefik](https://github.com/traefik/traefik) - Proxy inverso moderno y controlador de ingress con descubrimiento automatico de servicios.

### Secretos & Seguridad

- [Falco](https://github.com/falcosecurity/falco) - Monitoreo de seguridad en tiempo de ejecución para contenedores y Kubernetes.
- [Infisical](https://github.com/Infisical/infisical) - Plataforma de gestión de secretos de codigo abierto para equipos e infraestructura.
- [Step CA](https://github.com/smallstep/certificates) - Autoridad de certificados privada y solucion de gestion TLS automatizada.
- [Trivy](https://github.com/aquasecurity/trivy) - Escaner de seguridad para contenedores, dependencias, Kubernetes e IaC.

## Apps móviles

### Navegadores & Internet

- [Cromite](https://github.com/uazo/cromite) - Fork de Chromium enfocado en privacidad con bloqueo de anuncios.
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - Navegador móvil de codigo abierto desarrollado por Mozilla.
- [Fulguris](https://github.com/Slion/Fulguris) - Navegador Android ligero enfocado en privacidad.
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - Cliente de Reddit de codigo abierto para Android.
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - Fork de Firefox reforzado para privacidad en Android.

### Gestion de Archivos & Utilidades

- [Material Files](https://github.com/zhanghai/MaterialFiles) - Gestor de archivos con Material Design para Android.
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - Cliente moderno de F-Droid para Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - Actualizador de apps directamente desde GitHub y otras fuentes.
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - Utilidad de limpieza y mantenimiento del sistema Android.
- [Termux](https://github.com/termux/termux-app) - Emulador de terminal y entorno Linux para Android.

### Launchers & Personalizacion

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - Launcher enfocado en búsqueda y productividad.
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - Launcher personalizable para Android inspirado en Pixel.
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - Fork de Lawnchair con personalizacion mejorada.

### Multimedia & Musica

- [Auxio](https://github.com/OxygenCobalt/Auxio) - Reproductor de musica local para Android enfocado en simplicidad y rendimiento.
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - Reproductor de musica local inspirado en Material You para Android.
- [InnerTune](https://github.com/z-huang/InnerTune) - Cliente moderno de YouTube Music para Android.
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - Cliente de YouTube Music rico en funciones para Android con reproduccion offline, letras sincronizadas y diseño Material 3.
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - Reproductor de musica Android con prioridad a la privacidad construido con Material 3.
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - Reproductor de musica Android elegante con UI moderna.
- [RiMusic](https://github.com/fast4x/RiMusic) - Hermoso reproductor de musica Android impulsado por YouTube Music.
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - Companero móvil de codigo abierto para gestionar bibliotecas musicales personales.
- [Symphony](https://github.com/zyrouge/symphony) - Reproductor de musica elegante y ligero basado en Flutter.
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - Aplicacion ligera de streaming de musica de codigo abierto para Android.
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - Fork de Phonograph con experiencia de reproductor de musica clasica de Android.

### Mensajeria & Comunicacion

- [Briar](https://github.com/briar/briar) - Aplicacion de mensajeria encriptada peer-to-peer.
- [Element](https://github.com/element-hq/element-android) - Aplicacion de mensajeria segura basada en Matrix.
- [FairEmail](https://github.com/M66B/FairEmail) - Cliente de correo electronico orientado a la privacidad con personalizacion extensa.
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - Cliente de correo electronico de codigo abierto para Android.
- [Molly](https://github.com/mollyim/mollyim-android) - Fork de Signal reforzado para Android.
- [Session](https://github.com/session-foundation/session-android) - Mensajero encriptado enfocado en privacidad sin numeros de telefono.

### Gestores de Contrasenas & Seguridad

- [Aegis](https://github.com/beemdevelopment/Aegis) - Aplicacion segura de autenticación de dos factores.
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - Aplicacion de autenticación de dos factores con copias de seguridad.
- [Bitwarden](https://github.com/bitwarden/android) - Gestor de contrasenas de codigo abierto para Android.
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - Gestor de contrasenas compatible con KeePass.
- [Proton Pass](https://github.com/protonpass/android-pass) - Gestor de contrasenas desarrollado por Proton.

### Productividad & Notas

- [Joplin](https://github.com/laurent22/joplin) - Aplicacion de toma de notas y gestion de tareas con soporte de sincronizacion.
- [Logseq](https://github.com/logseq/logseq) - Aplicacion de gestion de conocimiento y esquematico.
- [Markor](https://github.com/gsantner/markor) - Editor Markdown y aplicacion de toma de notas para Android.
- [NoteGen](https://github.com/codexu/note-gen) - Aplicacion de toma de notas Markdown local-first con captura, edición, sincronizacion opcional y organizacion asistida por IA.
- [Notesnook](https://github.com/streetwriters/notesnook) - Aplicacion de toma de notas encriptada enfocada en privacidad.
- [Quillpad](https://github.com/quillpad/quillpad) - Aplicacion de toma de notas minimalista con Material You.
- [Standard Notes](https://github.com/standardnotes/app) - Aplicacion de notas encriptadas de extremo a extremo.
- [Tasks.org](https://github.com/tasks/tasks) - Aplicacion de gestion de tareas de codigo abierto para Android.

### Video & Streaming

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - Fork de streaming de anime y lector de manga bifurcado de Mihon.
- [Grayjay](https://github.com/futo-org/grayjay-android) - Plataforma multimedia unificada que soporta multiples fuentes de contenido.
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - Cliente Android para el servidor de medios Jellyfin.
- [LibreTube](https://github.com/libre-tube/LibreTube) - Cliente de YouTube enfocado en privacidad que usa Piped.
- [Mihon](https://github.com/mihonapp/mihon) - Lector de manga de codigo abierto para Android.
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - Frontend de YouTube ligero para Android sin dependencias de Google.
- [Seal](https://github.com/JunkFood02/Seal) - Descargador de video y audio impulsado por yt-dlp.

## Seguridad

### Seguridad de Contenedores & Kubernetes

- [Chainguard Images](https://github.com/chainguard-images/images) - Imagenes de contenedores minimas y reforzadas enfocadas en seguridad de cadena de suministro.
- [Dockle](https://github.com/goodwithtech/dockle) - Linter de imagenes de contenedores enfocado en mejores practicas de seguridad.
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - Verificador de cumplimiento del benchmark CIS Kubernetes.
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - Herramienta de pruebas de penetracion y auditoria de seguridad de Kubernetes.
- [Kubescape](https://github.com/kubescape/kubescape) - Plataforma de seguridad de Kubernetes para analisis de riesgos y escaneo de cumplimiento.
- [Kyverno](https://github.com/kyverno/kyverno) - Motor de politicas nativo de Kubernetes para seguridad, gobernanza y cumplimiento.

### Seguridad de Endpoint & Tiempo de Ejecucion

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - Conjunto de herramientas para detectar rootkits en sistemas Unix.
- [Lynis](https://github.com/CISOfy/lynis) - Herramienta de auditoria de seguridad y hardening para sistemas basados en Unix.
- [Openedr](https://github.com/ComodoSecurity/openedr) - Plataforma de deteccion y respuesta en endpoints para monitoreo y analisis de amenazas.
- [Osquery](https://github.com/osquery/osquery) - Framework de instrumentacion del sistema operativo que expone datos del sistema a traves de SQL.
- [Wazero](https://github.com/tetratelabs/wazero) - Runtime de WebAssembly seguro para ejecución de aplicaciones en sandbox.

### Seguridad & Monitoreo de Red

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - IPS colaborativo y plataforma de inteligencia de amenazas que protege servidores y aplicaciones.
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - Distribucion Linux para deteccion de intrusiones, monitoreo de seguridad empresarial y gestion de registros.
- [Snort](https://github.com/snort3/snort3) - Sistema ampliamente utilizado de prevencion y deteccion de intrusiones de codigo abierto.
- [Suricata](https://github.com/OISF/suricata) - Motor de IDS, IPS y monitoreo de seguridad de red de alto rendimiento.
- [Wazuh](https://github.com/wazuh/wazuh) - Plataforma de codigo abierto XDR y SIEM para deteccion de amenazas y cumplimiento.
- [Zeek](https://github.com/zeek/zeek) - Potente framework de analisis de red para monitoreo y visibilidad de seguridad.

### Privacidad & Anonimato

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - Configuracion de Firefox reforzada enfocada en privacidad y seguridad.
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - Sistema operativo móvil basado en Android enfocado en privacidad y seguridad.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - Firewall de aplicaciones y monitor de conexiones salientes para Linux.
- [Tor](https://github.com/torproject/tor) - Red superpuesta anonima para proteger la privacidad y resistir la vigilancia.

### Ingenieria inversa & Pentesting

- [Amass](https://github.com/owasp-amass/amass) - Herramienta de mapeo de superficie de ataque y descubrimiento de activos externos.
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - Suite de ingeniería inversa de software desarrollada por la NSA.
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - Framework de pruebas de penetracion para auditoria de seguridad y desarrollo de exploits.
- [Nmap](https://github.com/nmap/nmap) - Utilidad de descubrimiento de red y auditoria de seguridad.
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - Escaner de seguridad de aplicaciones web de codigo abierto mantenido por OWASP.
- [Responder](https://github.com/lgandx/Responder) - Envenenador LLMNR, NBT-NS y MDNS comunmente utilizado en evaluaciones de red interna.
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - Herramienta automatizada de inyeccion SQL y takeover de bases de datos.
- [Wireshark](https://github.com/wireshark/wireshark) - Analizador de protocolos de red para solucion de problemas e inspeccion de paquetes.
- [Hetty](https://github.com/dstotijn/hetty) - Proxy de codigo abierto que permite modificar paquetes.

### Gestion de Secretos & Encriptacion

- [age](https://github.com/FiloSottile/age) - Herramienta de encriptación de archivos simple, moderna y segura.
- [Cryptomator](https://github.com/cryptomator/cryptomator) - Solución de almacenamiento en la nube encriptada del lado del cliente enfocada en privacidad.
- [HashiCorp Vault](https://github.com/hashicorp/vault) - Plataforma de gestión de secretos y encriptación para proteger datos sensibles de infraestructura.
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Controlador de Kubernetes para gestionar secretos encriptados de forma segura en repositorios Git.
- [SOPS](https://github.com/getsops/sops) - Herramienta para encriptar y gestionar archivos de configuración estructurados y secretos.

### Escaneo & Analisis de Vulnerabilidades

- [Clair](https://github.com/quay/clair) - Herramienta de analisis estatico para identificar vulnerabilidades en imagenes de contenedores.
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - Plataforma de seguridad de cadena de suministro de software para analisis SBOM y seguimiento de vulnerabilidades.
- [Grype](https://github.com/anchore/grype) - Escaner de vulnerabilidades para imagenes de contenedores y sistemas de archivos.
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - Framework de cumplimiento de seguridad y escaneo de vulnerabilidades que implementa estándares SCAP.
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - Herramienta para detectar dependencias vulnerables en proyectos de software.
- [Semgrep](https://github.com/semgrep/semgrep) - Herramienta de analisis estatico para encontrar problemas de seguridad en codigo fuente.

## Self-Hosted

### Plataformas de Desarrollo & Servicios Git

- [Gitea](https://github.com/go-gitea/gitea) - Servicio Git simple, ligero y autoalojado.
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - Plataforma DevOps completa con control de origenes y funciones CI/CD.
- [Onedev](https://github.com/theonedev/onedev) - Servidor Git todo-en-uno con CI/CD y seguimiento de problemas.

### DNS, Redes & Privacidad

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - Servidor DNS autoalojado con bloqueo de anuncios y rastreadores.
- [Headscale](https://github.com/juanfont/headscale) - Servidor de coordinación de codigo abierto autoalojado compatible con clientes Tailscale.
- [NetBird](https://github.com/netbirdio/netbird) - Plataforma de redes seguras basada en WireGuard para conectividad privada.
- [Pi-hole](https://github.com/pi-hole/pi-hole) - Bloqueador de anuncios a nivel de red y pozo de DNS para mejorar la privacidad.
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - Potente servidor DNS de codigo abierto con soporte de protocolos modernos.

### Homelab & Gestion de Servidores

- [CapRover](https://github.com/caprover/caprover) - Plataforma PaaS autoalojada ligera para desplegar aplicaciones web con Docker.
- [CasaOS](https://github.com/IceWhaleTech/CasaOS) - Sistema operativo de nube personal simple y amigable para principiantes para apps autoalojadas.
- [Coolify](https://github.com/coollabsio/coolify) - Alternativa autoalojable de codigo abierto a Heroku, Netlify y Vercel.
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - Portal autoalojado para gestionar aplicaciones, proxy inverso y autenticación en una sola interfaz.
- [Dokploy](https://github.com/Dokploy/dokploy) - Plataforma de despliegue moderna autoalojada construida para Docker y entornos VPS.
- [Umbrel](https://github.com/getumbrel/umbrel) - Plataforma de servidor personal para ejecutar aplicaciones y servicios autoalojados.
- [YunoHost](https://github.com/YunoHost/yunohost) - Plataforma de autoalojamiento basada en Debian enfocada en simplicidad y privacidad.

### Servidores de Medios & Streaming

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - Servidor autoalojado de audiolibros y podcasts con aplicaciones modernas y soporte de metadatos.
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - Suite de gestion de radio web para estaciones de radio internet autoalojadas.
- [Jellyfin](https://github.com/jellyfin/jellyfin) - Servidor de medios completamente de codigo abierto para peliculas, series de TV, musica y TV en vivo.
- [Navidrome](https://github.com/navidrome/navidrome) - Servidor de streaming de musica autoalojado ligero compatible con clientes Subsonic.
- [Owncast](https://github.com/owncast/owncast) - Servidor de streaming en vivo autoalojado con chat y soporte de federacion.
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - Servidor de medios de YouTube autoalojado y plataforma de archivado de videos.

### Monitoreo & Uptime

- [Beszel](https://github.com/henrygd/beszel) - Plataforma de monitoreo de servidores ligera con soporte Docker.
- [Checkmk](https://github.com/Checkmk/checkmk) - Solución integral de monitoreo de TI para servidores, contenedores y redes.
- [Netdata](https://github.com/netdata/netdata) - Plataforma de monitoreo y solucion de problemas de infraestructura en tiempo real.
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - Herramienta de monitoreo de uptime autoalojada con paginas de estado y notificaciones.

### Gestores de Contrasenas & Autenticacion

- [Authentik](https://github.com/goauthentik/authentik) - Proveedor de identidad y plataforma de autenticación autoalojada.
- [Kanidm](https://github.com/kanidm/kanidm) - Servidor de gestion de identidades moderno enfocado en seguridad y simplicidad.
- [LLDAP](https://github.com/lldap/lldap) - Servidor LDAP ligero para equipos pequenos y configuraciones de homelab.
- [Passbolt](https://github.com/passbolt/passbolt_api) - Gestor de contrasenas de codigo abierto diseñado para colaboración en equipo.
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Servidor de gestor de contrasenas compatible con Bitwarden escrito en Rust.

### Fotos & Gestion de Archivos

- [File Browser](https://github.com/filebrowser/filebrowser) - Gestor de archivos basado en web para gestionar archivos en servidores remotos.
- [Immich](https://github.com/immich-app/immich) - Solución de respaldo de fotos y videos autoalojada de alto rendimiento inspirada en Google Photos.
- [PhotoPrism](https://github.com/photoprism/photoprism) - Aplicacion de gestion de fotos autoalojada impulsada por IA.
- [Piwigo](https://github.com/Piwigo/Piwigo) - Plataforma de galeria de fotos de codigo abierto con soporte de plugins.
- [Syncthing](https://github.com/syncthing/syncthing) - Aplicacion de sincronizacion continua de archivos descentralizada.

### RSS, Leer Despues & Conocimiento

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - Agregador de feeds RSS ligero y autoalojado.
- [Hoarder](https://github.com/hoarder-app/hoarder) - Gestor de marcadores autoalojado con organizacion asistida por IA.
- [Karakeep](https://github.com/karakeep-app/karakeep) - Plataforma moderna de marcado y gestion de conocimiento autoalojada.
- [Miniflux](https://github.com/miniflux/v2) - Lector RSS minimalista enfocado en rendimiento y simplicidad.
- [Wallabag](https://github.com/wallabag/wallabag) - Aplicacion autoalojada de leer despues para guardar articulos web.

## Software / SaaS

### Analitica & Monitoreo

- [OpenReplay](https://github.com/openreplay/openreplay) - Plataforma de replay de sesiones y analitica de producto para depurar problemas de usuarios.
- [Plausible Analytics](https://github.com/plausible/analytics) - Plataforma de analitica web ligera y amigable con la privacidad.
- [Signoz](https://github.com/SigNoz/signoz) - Plataforma de codigo abierto de observabilidad para metricas, trazas y registros.
- [Umami](https://github.com/umami-software/umami) - Alternativa a Google Analytics enfocada en privacidad para analitica web.

### Automatizacion & Herramientas Internas

- [Appsmith](https://github.com/appsmithorg/appsmith) - Framework de codigo abierto para crear aplicaciones internas rápidamente.
- [Budibase](https://github.com/Budibase/budibase) - Plataforma low-code para herramientas internas, formularios y paneles operativos.
- [n8n](https://github.com/n8n-io/n8n) - Plataforma de automatización de flujos de trabajo con autoalojamiento e integraciones extensibles.
- [ToolJet](https://github.com/ToolJet/ToolJet) - Plataforma low-code para construir herramientas internas y paneles de administracion.

### Comunicacion & Soporte

- [Chatwoot](https://github.com/chatwoot/chatwoot) - Plataforma de compromiso y soporte de clientes con chat en vivo y bandejas omnicanal.
- [Formbricks](https://github.com/formbricks/formbricks) - Plataforma de codigo abierto de gestion de experiencia y retroalimentación de producto.
- [Papercups](https://github.com/papercups-io/papercups) - Plataforma de codigo abierto de chat en vivo y mensajeria de clientes.
- [Typebot](https://github.com/baptisteArNo/typebot.io) - Constructor de formularios conversacionales para crear flujos de trabajo interactivos estilo chat.

### Documentacion & Bases de Conocimiento

- [Docs](https://github.com/suitenumerique/docs) - Plataforma de edición colaborativa de documentos enfocada en privacidad y autoalojamiento.
- [Documenso](https://github.com/documenso/documenso) - Plataforma de codigo abierto de firma de documentos como alternativa a DocuSign.
- [Outline](https://github.com/outline/outline) - Base de conocimiento y plataforma de documentación colaborativa para equipos.
- [Wiki.js](https://github.com/requarks/wiki) - Potente plataforma wiki de codigo abierto y extensible.

### Almacenamiento de Archivos & Nube

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - Sistema de almacenamiento en la nube autoalojado que soporta multiples proveedores de almacenamiento.
- [Filestash](https://github.com/mickael-kerjean/filestash) - Cliente web moderno para gestionar archivos en multiples backends de almacenamiento.
- [Nextcloud](https://github.com/nextcloud/server) - Nube de productividad autoalojada con sincronizacion de archivos, herramientas de colaboración y comunicación.
- [Seafile](https://github.com/haiwen/seafile) - Plataforma de alto rendimiento de alojamiento y sincronizacion de archivos de codigo abierto.

### Productividad & Colaboracion

- [AFFiNE](https://github.com/toeverything/AFFiNE) - Espacio de trabajo colaborativo todo-en-uno que combina documentos, pizarras y bases de datos.
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - Plataforma de codigo abierto de workspace y gestion de conocimiento posicionada como alternativa a Notion.
- [Erxes](https://github.com/erxes/erxes) - Plataforma de codigo abierto de marketing de crecimiento, ventas y compromiso de clientes.
- [Focalboard](https://github.com/mattermost/focalboard) - Herramienta de gestion de proyectos y tareas autoalojada inspirada en Trello y Notion.
- [Plane](https://github.com/makeplane/plane) - Plataforma de codigo abierto de gestion de proyectos y seguimiento de problemas.
- [Twenty](https://github.com/twentyhq/twenty) - Plataforma CRM moderna de codigo abierto enfocada en extensibilidad y propiedad.

## Desarrollo Web

### Librerias UI para Angular

- [Angular Material](https://github.com/angular/components) - Libreria de componentes Material Design para Angular mantenida por Google.
- [PrimeNG](https://github.com/primefaces/primeng) - Rica libreria de componentes UI de Angular con alto rendimiento y amplias opciones de personalizacion.
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - Potente kit de UI Angular de codigo abierto con un gran conjunto de componentes y herramientas.
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - Plantilla de panel de administracion Angular de codigo abierto construida con Tailwind CSS.

### Editores de Codigo

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - Plataforma de IDE de codigo abierto flexible utilizada en entornos de nube y escritorio.
- [Helix](https://github.com/helix-editor/helix) - Editor modal de rápido crecimiento con soporte LSP integrado y valores predeterminados modernos.
- [Neovim](https://github.com/neovim/neovim) - Editor basado en Vim altamente popular y extensible enfocado en rendimiento y flujos de trabajo modernos.
- [Visual Studio Code](https://github.com/microsoft/vscode) - El editor de codigo de codigo abierto mas utilizado con un ecosistema masivo de extensiones.
- [VSCodium](https://github.com/VSCodium/vscodium) - Distribucion completamente de codigo abierto de VS Code sin componentes propietarios.
- [Zed](https://github.com/zed-industries/zed) - Editor colaborativo de alto rendimiento en rápida adopcion.

### Herramientas de Diseno

- [Excalidraw](https://github.com/excalidraw/excalidraw) - Pizarra virtual para bocetos de diagramas estilo dibujo a mano con colaboración en tiempo real y lienzo infinito.
- [Open Design](https://github.com/nexu-io/open-design) - Herramienta de diseño local-first con IA con 19 habilidades y 71 sistemas de diseño de grado de marca para generar artefactos web, móviles y de diapositivas.
- [open-pencil](https://github.com/open-pencil/open-pencil) - Editor de diseño nativo de IA compatible con Figma con CLI sin cabeza, servidor MCP y exportacion de diseño a codigo.

### Iconos

- [Bootstrap Icons](https://github.com/twbs/icons) - Libreria de iconos oficial de Bootstrap.
- [Boxicons](https://github.com/atisawd/boxicons) - Libreria de iconos simple y flexible.
- [css.gg](https://github.com/astrit/css.gg) - Sistema de iconos CSS y SVG de codigo abierto.
- [Feather Icons](https://github.com/feathericons/feather) - Iconos minimos y limpios de codigo abierto.
- [Heroicons](https://github.com/tailwindlabs/heroicons) - Conjunto de iconos oficial de Tailwind CSS (contorno y solido).
- [Ionicons](https://github.com/ionic-team/ionicons) - Paquete de iconos para Ionic y uso general.
- [Lucide Animated](https://github.com/pqoqubbw/icons) - Hermosa coleccion de iconos animados de React construidos con Motion y Lucide.
- [React Icons](https://github.com/react-icons/react-icons) - Paquetes de iconos populares como componentes React.
- [Morphicons](https://github.com/guillermolg00/morphicons) - Libreria universal de morphing de iconos con fisica de resortes para animar entre iconos basados en trazos.
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - Libreria de iconos de codigo abierto de estilo de sistema.
- [Simple Icons](https://github.com/simple-icons/simple-icons) - Iconos de marcas y logotipos en formato SVG.
- [Tabler Icons](https://github.com/tabler/tabler-icons) - Conjunto de iconos grande, consistente y activamente mantenido.

### Librerias UI para React

- [Ant Design](https://github.com/ant-design/ant-design) - Sistema de diseño de nivel empresarial con componentes React robustos y consistentes.
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - Libreria modular enfocada en accesibilidad y gran experiencia de desarrollador.
- [Material-UI (MUI)](https://github.com/mui/material-ui) - Libreria de componentes React basada en Material Design, altamente personalizable y ampliamente adoptada.
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - Sistema de componentes utility-first para construir UIs consistentes en móvil y web.
- [PrimeReact](https://github.com/primefaces/primereact) - Suite completa de componentes UI de React ricos, flexibles yagnosticos al diseño.
- [Streamdown](https://github.com/vercel/streamdown) - Componente de React para renderizar Markdown con soporte para streaming de contenido generado por IA.
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Componentes Bootstrap reconstruidos para React sin dependencia de jQuery.
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - Integracion oficial de React para Semantic UI con componentes declarativos.

### Componentes UI

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - Libreria de componentes UI retro estilo 8-bit de codigo abierto.
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - Componentes de animacion de carga reutilizables estilo dotmatrix instalables via registro shadcn o copia manual.
- [Flowbite](https://github.com/themesberg/flowbite) - Libreria de componentes UI de codigo abierto basada en Tailwind CSS con elementos interactivos.
- [Headless UI](https://github.com/tailwindlabs/headlessui) - Primitivas UI sin estilo completamente accesibles diseñadas para Tailwind CSS.
- [LangUI](https://github.com/CommandCodeAI/langui) - Componentes de codigo abierto Tailwind CSS para interfaces de IA y estilo GPT.
- [loading-ui](https://github.com/turbostarter/loading-ui) - Hermosos estados de carga, esqueletos y marcadores de posicion animados de codigo abierto diseñados para aplicaciones React modernas con Tailwind CSS.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - Componentes UI de codigo abierto copiar-pegar para React construidos sobre Tailwind CSS.
- [uiverse](https://github.com/uiverse-io/galaxy) - Elementos UI de codigo abierto impulsados por la comunidad construidos con HTML y CSS.

### Librerias UI para Vue

- [Quasar](https://github.com/quasarframework/quasar) - Framework Vue completo para construir SPAs, SSR, aplicaciones móviles y de escritorio.
- [Vuetify](https://github.com/vuetifyjs/vuetify) - Framework de componentes Material Design para Vue con un gran ecosistema.

## Contribuyendo

Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork de este repositorio y crea una nueva rama: `feat/project-name`
2. Agrega tu entrada a la sección apropiada en `README.md` siguiendo el formato a continuación.
3. Sube a la rama (`git push origin feat/project-name`)
4. Abre un Pull Request con un título como `feat: Project Name` y una breve explicación de por que pertenece.

Para mas informacion sobre contribuir, por favor consulta nuestras [Directrices de Contribución](CONTRIBUTING.md).

- ❤️ Gracias por contribuir al proyecto! Tu ayuda es muy apreciada.

<div align="center">
  
  <h3>Contribuidores</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
