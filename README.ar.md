<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/banner-dark.png">
    <source media="(prefers-color-scheme: light)" srcset=".github/assets/banner-light.png">
    <img alt="banner" src=".github/assets/banner-dark.png">
  </picture>

  <p>
    <br/>
    مجموعة من <strong>الموارد مفتوحة المصدر حقاً</strong> &mdash;
    <br/>
    لأنني أيضاً مللت من المشاريع التي ليست مفتوحة المصدر فعلياً.
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

## المحتويات

<!--lint disable awesome-list-item-->

- [Backend / BaaS](#backend--baas)
  - [API & GraphQL](#api--graphql)
  - [المصادقة والهوية](#المصادقة-والهوية)
  - [Backend as a Service](#backend-as-a-service)
  - [أطر العمل](#أطر-العمل)
- [أدوات CLI](#أدوات-cli)
  - [أدوات المطورين](#أدوات-المطورين)
  - [إدارة الملفات والتنقل](#إدارة-الملفات-والتنقل)
  - [مديري الحزم والبيئات التشغيلية](#مديري-الحزم-والبيئات-التشغيلية)
  - [الإنتاجية وسير العمل](#الإنتاجية-وسير-العمل)
  - [الأطراف والبيئات الطرفية](#الأطراف-والبيئات-الطرفية)
  - [مراقبة النظام والأدوات المساعدة](#مراقبة-النظام-والأدوات-المساعدة)
- [قواعد البيانات](#قواعد-البيانات)
  - [قواعد بيانات الرسوم البيانية](#قواعد-بيانات-الرسوم-البيانية)
  - [قواعد بيانات القيمة المخزنة والتخزين المؤقت](#قواعد-بيانات-القيمة-المخزنة-والتخزين-المؤقت)
  - [قواعد البيانات NoSQL](#قواعد-البيانات-nosql)
  - [قواعد البيانات العلائقية](#قواعد-البيانات-العلائقية)
  - [محركات البحث والتحليل](#محركات-البحث-والتحليل)
  - [قواعد بيانات السلاسل الزمنية](#قواعد-بيانات-السلاسل-الزمنية)
  - [قواعد بيانات المتجهات](#قواعد-بيانات-المتجهات)
- [DevOps](#devops)
  - [الحاويات والمحاكاة](#الحاويات-والمحاكاة)
  - [Kubernetes والتنسيق](#kubernetes-والتنسيق)
  - [CI / CD](#ci--cd)
  - [البنية التحتية ككود](#البنية-التحتية-ككود)
  - [المراقبة والملاحظات](#المراقبة-والملاحظات)
  - [الشبكات والوكيل العكسي](#الشبكات-والوكيل-العكسي)
  - [الأسرار والأمان](#الأسرار-والأمان)
- [التطبيقات المحمولة](#التطبيقات-المحمولة)
  - [المتصفحات والإنترنت](#المتصفحات-والإنترنت)
  - [إدارة الملفات والأدوات المساعدة](#إدارة-الملفات-والأدوات-المساعدة)
  - [المشغّلات والتخصيص](#المشغّلات--والتخصيص)
  - [الوسائط والموسيقى](#الوسائط-والموسيقى)
  - [التواصل والمراسلة](#التواصل-والمراسلة)
  - [مديري كلمات المرور والأمان](#مديري-كلمات-المرور-والأمان)
  - [الإنتاجية والملاحظات](#الإنتاجية-والملاحظات)
  - [الفيديو والبث](#الفيديو-والبث)
- [الأمان](#الأمان)
  - [أمان الحاويات و Kubernetes](#أمان-الحاويات-و-kubernetes)
  - [أمن النهاية والبيئات التشغيلية](#أمن-النهاية-والبيئات-التشغيلية)
  - [أمن الشبكات والمراقبة](#أمن-الشبكات-والمراقبة)
  - [الخصوصية وال withhold](#الخصوصية--وال-withhold)
  - [الهندسة العكسية واختبار الاختراق](#الهندسة-العكسية-واختبار-الاختراق)
  - [إدارة الأسرار والتشفير](#إدارة-الأسرار-والتشفير)
  - [فحص وتقييم الثغرات الأمنية](#فحص-وتقييم-الثغرات-الأمنية)
- [الاستضافة الذاتية](#الاستضافة-الذاتية)
  - [منصات المطورين وخدمات Git](#منصات-المطورين-وخدمات-git)
  - [DNS والشبكات والخصوصية](#dns-والشبكات-والخصوصية)
  - [مختبر المنزل وإدارة الخوادم](#مختبر-المنزل-وإدارة-الخوادم)
  - [خوادم الوسائط والبث](#خوادم-الوسائط-والبث)
  - [المراقبة وقت التشغيل](#المراقبة-وقت-التشغيل)
  - [مديري كلمات المرور والمصادقة](#مديري-كلمات-المرور-والمصادقة)
  - [الصور وإدارة الملفات](#الصور-وإدارة-الملفات)
  - [RSS وقراءة لاحقاً والمعرفة](#rss-وقراءة-لاحقاً-والمعرفة)
- [البرمجيات / SaaS](#البرمجيات--saas)
  - [التحليلات والمراقبة](#التحليلات-والمراقبة)
  - [الأتمتة والأدوات الداخلية](#الأتمتة-والأدوات-الداخلية)
  - [التواصل والدعم](#التواصل-والدعم)
  - [التوثيق وقواعد المعرفة](#التوثيق-وقواعد-المعرفة)
  - [تخزين الملفات والسحابة](#تخزين-الملفات-والسحابة)
  - [الإنتاجية والتعاون](#الإنتاجية-والتعاون)
- [تطوير الويب](#تطوير-الويب)
  - [مكتبات Angular لواجهات المستخدم](#مكتبات-angular-لواجهات-المستخدم)
  - [محررات الكود](#محررات-الكود)
  - [أدوات التصميم](#أدوات-التصميم)
  - [الأيقونات](#الأيقونات)
  - [مكتبات React لواجهات المستخدم](#مكتبات-react-لواجهات-المستخدم)
  - [مكونات واجهة المستخدم](#مكونات-واجهة-المستخدم)
  - [مكتبات Vue لواجهات المستخدم](#مكتبات-vue-لواجهات-المستخدم)

## Backend / BaaS

### API & GraphQL

- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga) - خادم GraphQL حديث وخفيف.
- [PostgREST](https://github.com/PostgREST/postgrest) - يحوّل PostgreSQL فوراً إلى واجهة برمجة REST.
- [tRPC](https://github.com/trpc/trpc) - واجهات برمجة التطبيقات قوية النهاية دون قوالب.

### المصادقة والهوية

- [Authelia](https://github.com/authelia/authelia) - حل مصادقة متعددة العوامل مُستضاف ذاتياً.
- [Keycloak](httpsgithub.com/keycloak/keycloak) - حل IAM كامل الميزات مفتوح المصدر (SSO, OAuth2, OIDC, SAML) مدعوم من Red Hat.
- [Ory Kratos](https://github.com/ory/kratos) - نظام مصادقة يركز على الأمان مع نواة مفتوحة المصدر بالكامل.

### Backend as a Service

- [Parse Server](https://github.com/parse-community/parse-server) - خلفية مفتوحة المصدر ناضجة بدون ميزات حرجة مغلقة.
- [PocketBase](https://github.com/pocketbase/pocketbase) - خلفية مضمنة مع SQLite والمصادقة وواجهة REST، مفتوحة المصدر بالكامل.
- [Supabase](https://github.com/supabase/supabase) - بديل مفتوح المصدر لFirebase مبني على PostgreSQL.
- [UnDB](https://github.com/undb-io/undb) - قاعدة بيانات بدون كود وBaaS مُستضافة ذاتياً (مبني على SQLite، شبيه بـ Airtable).

### أطر العمل

- [AdonisJS](https://github.com/adonisjs/core) - إطار عمل Node.js حديث مع نهج TypeScript-first.
- [Elysia](https://github.com/elysiajs/elysia) - إطار عمل عالي الأداء لـ Bun مع نوع قوي.
- [FeathersJS](https://github.com/feathersjs/feathers) - إطار عمل مرن لتطبيقات REST والوقت الحقيقي.
- [Hono](https://github.com/honojs/hono) - إطار عمل فائق السرعة للبيئات الحديثة (Edge, Bun, Deno, Node).
- [LoopBack](https://github.com/loopbackio/loopback-next) - إطار عمل API متقدم مبني على OpenAPI.
- [Midway](https://github.com/midwayjs/midway) - إطار عمل Node.js مع حقن التبعيات مستوحى من Spring.
- [Moleculer](https://github.com/moleculerjs/moleculer) - إطار عمل سريع وقوي للخدمات المصغرة.
- [Wasp](https://github.com/wasp-lang/wasp) - إطار عمل كامل مُصرح به يولّد الخلفية تلقائياً.

## أدوات CLI

### أدوات المطورين

- [bat](https://github.com/sharkdp/bat) - نسخة من `cat` مع إبراز الصيغة وتكامل Git.
- [delta](https://github.com/dandavison/delta) - عارض صفحات مع إبراز الصيغة لمخرجات Git وdiff.
- [fd](https://github.com/sharkdp/fd) - بديل سهل وسريع وسهل الاستخدام لـ `find`.
- [httpie](https://github.com/httpie/cli) - عميل HTTP سطر أوامر سهل الاستخدام لواجهات برمجة التطبيقات والخدمات الإلكترونية.
- [hyperfine](https://github.com/sharkdp/hyperfine) - أداة قياس أداء سطر أوامر مع تحليل إحصائي.
- [jq](https://github.com/jqlang/jq) - معالج JSON خفيف ومرن للطرفيات.
- [lazydocker](https://github.com/jesseduffield/lazydocker) - واجهة طرفية لـ Docker وإدارة الحاويات.
- [lazygit](https://github.com/jesseduffield/lazygit) - واجهة طرفية بسيطة لعمليات Git.
- [ripgrep](https://github.com/BurntSushi/ripgrep) - أداة بحث تكراري فائقة السرعة تحترم `.gitignore`.
- [xh](https://github.com/ducaale/xh) - عميل HTTP ودود وسريع مصمم كبديل لـ HTTPie.
- [yq](https://github.com/mikefarah/yq) - معالج محمول لـ YAML وJSON وXML وTOML مستوحى من jq.

### إدارة الملفات والتنقل

- [broot](https://github.com/Canop/broot) - متصفح شجرة مجلدات تفاعلي مع بحث ضبابي.
- [fzf](https://github.com/junegunn/fzf) - عارض ضبابي متعدد الاستخدامات لسطر الأوامر.
- [nnn](https://github.com/jarun/nnn) - متصفح ملفات طرفية خفيف وسريع للغاية.
- [ranger](https://github.com/ranger/ranger) - مدير ملفات م consola مع اختصارات لوحة مفاتيح Vim.
- [yazi](https://github.com/sxyazi/yazi) - مدير ملفات طرفية فائق السرعة مكتوب بلغة Rust.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - أمر `cd` أكثر ذكاءً مستوحى من z ومدعوم بالتكرار.

### مدراء الحزم والبيئات التشغيلية

- [asdf](https://github.com/asdf-vm/asdf) - مدير إصدارات قابل للتوسع يدعم بيئات تشغيل وأدوات متعددة.
- [Bun](https://github.com/oven-sh/bun) - بيئة تشغيل JavaScript سريعة ومدير حزم ومجمّع.
- [Deno](https://github.com/denoland/deno) - بيئة تشغيل آمنة لـ JavaScript وTypeScript مبنية بـ Rust.
- [Homebrew](https://github.com/Homebrew/brew) - مدير حزم شهير لنظامي التشغيل macOS وLinux.
- [pnpm](https://github.com/pnpm/pnpm) - مدير حزم سريع وموفر لمساحة القرص لـ JavaScript.

### الإنتاجية وسير العمل

- [atuin](https://github.com/atuinsh/atuin) - محرك بحث ومزامنة سجل.shell مع تخزين مشفر.
- [Glow](https://github.com/charmbracelet/glow) - عرض ملفات Markdown بشكل جميل في الطرفية.
- [gum](https://github.com/charmbracelet/gum) - أداة لإنشاء نصوص shell أنيقة وسير عمل في الطرفية.
- [Taskwarrior](https://github.com/GothenburgBitFactory/taskwarrior) - أداة CLI قوية لإدارة المهام والإنتاجية.
- [wtfutil](https://github.com/wtfutil/wtf) - لوحة طرفية شخصية لعرض معلومات المطورين.

### الأطراف والبيئات الطرفية

- [Fish Shell](https://github.com/fish-shell/fish-shell) - ذكي سهل الاستخدام مع اقتراحات تلقائية وإعدادات افتراضية حديثة.
- [Nushell](https://github.com/nushell/nushell) - حديث مبني حول البيانات المنظمة بدلاً من النص العادي.
- [tmux](https://github.com/tmux/tmux) - مُرشّح طرفية لإدارة الجلسات الدائمة واللوحات.
- [Warp](https://github.com/warpdotdev/Warp) - طرفية حديثة مبنية بلغة Rust مع ميزات ذكاء اصطناعي وت协作.
- [WezTerm](https://github.com/wez/wezterm) - محاكي طرفية متعدد المنصات مسرّع بـ GPU مكتوب بلغة Rust.
- [Zellij](https://github.com/zellij-org/zellij) - مساحة عمل ومرشّح طرفية يركز على سهولة الاستخدام والقابلية للتوسيع.

### مراقبة النظام والأدوات المساعدة

- [bottom](https://github.com/ClementTsang/bottom) - مراقب رسومي للعمليات والنظام متعدد المنصات مستوحى من htop.
- [btop](https://github.com/aristocratos/btop) - مراقب موارد حديث وغني بصرياً لنظامي Linux وmacOS وBSD.
- [dua](https://github.com/Byron/dua-cli) - محلل سريع لاستخدام القرص مع واجهة تفاعلية للطرفية.
- [dust](https://github.com/bootandy/dust) - بديل أكثر intuitiveness لـ `du` مكتوب بلغة Rust.
- [htop](https://github.com/htop-dev/htop) - عارض تفاعلي للعمليات وراقب النظام.
- [procs](https://github.com/dalance/procs) - بديل حديث لـ `ps` مع مخرجات ملونة ومنظمة.

## قواعد البيانات

### قواعد بيانات الرسوم البيانية

- [Dgraph](https://github.com/hypermodeinc/dgraph) - قاعدة بيانات رسومية موزعة مع واجهات برمجة GraphQL الأصلية.

### قواعد بيانات القيمة والمفتاح والتخزين المؤقت

- [Apache Ignite](https://github.com/apache/ignite) - قاعدة بيانات موزعة في الذاكرة ومنصة تخزين مؤقت.
- [Dragonfly](https://github.com/dragonflydb/dragonfly) - مخزن بيانات حديث في الذاكرة متوافق مع واجهات Redis وMemcached.
- [etcd](https://github.com/etcd-io/etcd) - مخزن قيمة-مفتاح موزع يُستخدم لتنسيق اكتشاف الخدمات في Kubernetes.
- [Valkey](https://github.com/valkey-io/valkey) - fork لـ Redis تقوده المجتمع ويركز على التطوير المفتوح المصدر بالكامل.

### قواعد بيانات NoSQL

- [ArangoDB](https://github.com/arangodb/arangodb) - قاعدة بيانات متعددة النماذج تدعم نماذج البيانات الرسومية والمستندات والقيمة والمفتاح.
- [Cassandra](https://github.com/apache/cassandra) - قاعدة بيانات أعمدة واسعة قابلة للتوسع للغاية مصممة لتوفر عالٍ.
- [CouchDB](https://github.com/apache/couchdb) - قاعدة بيانات مستندات JSON موزعة مع نسخ احتياطي وقدرات بدون اتصال.
- [FerretDB](https://github.com/FerretDB/FerretDB) - بديل مفتوح المصدر لـ MongoDB مبني على PostgreSQL.
- [RethinkDB](https://github.com/rethinkdb/rethinkdb) - قاعدة بيانات موزعة في الوقت الحقيقي مع دعم التغييرات.

### قواعد البيانات العلائقية

- [ClickHouse](https://github.com/ClickHouse/ClickHouse) - قاعدة بيانات موجهة للأعمدة عالية الأداء للتحليلات والمراقبة.
- [CockroachDB](https://github.com/cockroachdb/cockroach) - قاعدة بيانات SQL موزعة تركز على التوسع والتحمّل للأعطال.
- [DuckDB](https://github.com/duckdb/duckdb) - قاعدة بيانات تحليلية في عملية مصممة لحملات عمل OLAP سريعة.
- [FoundationDB](https://github.com/apple/foundationdb) - قاعدة بيانات قيمة-مفتاح تنقلية موزعة مصممة للاتساق القوي.
- [LibSQL](https://github.com/tursodatabase/libsql) - fork مفتوح المصدر لـ SQLite يركز على حملات العمل الموزعة والمضمنة.
- [MariaDB](https://github.com/MariaDB/server) - قاعدة بيانات علائقية تقودها المجتمع_BRANCH من MySQL مع حوكمة قوية مفتوحة المصدر.
- [PostgreSQL](https://github.com/postgres/postgres) - قاعدة بيانات علائقية متقدمة مفتوحة المصدر معروفة بالموثوقية والقابلية للتوافق ومعايير SQL.
- [RisingWave](https://github.com/risingwavelabs/risingwave) - قاعدة بيانات SQL موزعة للتدفق متوافقة مع PostgreSQL.
- [SQLite](https://github.com/sqlite/sqlite) - قاعدة بيانات علائقية مضمنة خفيفة تُستخدم على نطاق واسع في التطبيقات والأجهزة المحمولة.
- [TiDB](https://github.com/pingcap/tidb) - قاعدة بيانات موزعة متوافقة مع MySQL مصممة لـ HTAP وحملات العمل السحابية الأصلية.
- [YugabyteDB](https://github.com/yugabyte/yugabyte-db) - قاعدة بيانات موزعة عالية الأداء متوافقة مع PostgreSQL للتطبيقات القابلة للتوسع.

### محركات البحث والتحليلات

- [Manticore Search](https://github.com/manticoresoftware/manticoresearch) - محرك بحث نصي كامل مصمم لفهرسة عالية الأداء والاستعلامات.
- [Meilisearch](https://github.com/meilisearch/meilisearch) - محرك بحث سريع وسهل الاستخدام للمطورين مع تحمّل أخطاء الكتابة.
- [OpenSearch](https://github.com/opensearch-project/OpenSearch) - محرك بحث وتحليلات تقوده المجتمع من Fork من Elasticsearch.
- [Sonic](https://github.com/valeriansaliou/sonic) - خلفية بحث خفيفة وبدون مخطط محسّنة للسرعة.
- [Typesense](https://github.com/typesense/typesense) - محرك بحث فوري مفتوح المصدر يركز على البساطة والأداء.

### قواعد بيانات السلاسل الزمنية

- [QuestDB](https://github.com/questdb/questdb) - قاعدة بيانات سلاسل زمنية عالية الأداء تركز على التحليلات SQL السريعة.
- [TDengine](https://github.com/taosdata/TDengine) - منصة سلاسل زمنية مصممة لبيانات إنترنت الأشياء والصناعة والمراقبة.

### قواعد البيانات المتجهية

- [Chroma](https://github.com/chroma-core/chroma) - قاعدة بيانات تضمينات خفيفة مصممة لتطبيقات LLM.
- [LanceDB](https://github.com/lancedb/lancedb) - قاعدة بيانات متجهية مضمنة محسّنة لتطبيقات الذكاء الاصطناعي وسير العمل المحلي أولاً.
- [Milvus](https://github.com/milvus-io/milvus) - قاعدة بيانات متجهية قابلة للتوسع مبنية لتضمينات التعلم الآلي وحملات عمل الذكاء الاصطناعي.
- [Qdrant](https://github.com/qdrant/qdrant) - محرك بحث تشابه متجهي لتطبيقات الذكاء الاصطناعي والبحث الدلالي.
- [SurrealDB](https://github.com/surrealdb/surrealdb) - قاعدة بيانات متعددة النماذج تجمع بين المستندات والرسوم البيانية والميزات العلائقية مع دعم المتجهات.
- [Weaviate](https://github.com/weaviate/weaviate) - محرك بحث متجهي مفتوح المصدر مع GraphQL وقدرات ذكاء اصطناعي أصلية.

## DevOps

### الحاويات والافتراضية

- [containerd](https://github.com/containerd/containerd) - بيئة تشغيل حاويات عالية الأداء تُستخدم بواسطة Kubernetes وDocker.
- [CRI-O](https://github.com/cri-o/cri-o) - بيئة تشغيل حاويات أصلية لـ Kubernetes تطبق معيار CRI.
- [Incus](https://github.com/lxc/incus) - مدير حديث للحاويات والآلات الافتراضية تقوده المجتمع من Fork من LXD.
- [LXC](https://github.com/lxc/lxc) - بيئة تشغيل حاويات Linux خفيفة مع دعم حاويات النظام منخفض المستوى.
- [Podman](https://github.com/containers/podman) - محرك حاويات بدون daemon يركز على الأمان والتوافق مع OCI.

### Kubernetes والتنسيق

- [Argo CD](https://github.com/argoproj/argo-cd) - أداة تسليم مستمر GitOps مُصرّح بها لـ Kubernetes.
- [Flux](https://github.com/fluxcd/flux2) - مجموعة أدوات GitOps للحفاظ على مجموعات Kubernetes متزامنة مع مستودعات Git.
- [Helm](https://github.com/helm/helm) - مدير حزم لتطبيقات Kubernetes.
- [k3s](https://github.com/k3s-io/k3s) - توزيعة Kubernetes خفيفة محسّنة لحملات العمل على الحافة وإنترنت الأشياء.
- [Kubernetes](https://github.com/kubernetes/kubernetes) - المنصة الرائدة لتنسيق الحاويات مفتوحة المصدر.
- [Rancher](https://github.com/rancher/rancher) - منصة إدارة Kubernetes لعمليات المجموعات المتعددة.

### CI / CD

- [Concourse](https://github.com/concourse/concourse) - نظام تكامل مستمر مبني على الحاويات مع خطوط أنابيب مُصرّح بها.
- [GoCD](https://github.com/gocd/gocd) - خادم تسليم مستمر مفتوح المصدر يركز على سير العمل المعقد.
- [Jenkins](https://github.com/jenkinsci/jenkins) - خادم أتمتة قابل للتوسيع لخطوط أنابيب CI/CD.
- [Tekton](https://github.com/tektoncd/pipeline) - إطار عمل أصلي لـ Kubernetes لإنشاء أنظمة CI/CD.
- [Woodpecker CI](https://github.com/woodpecker-ci/woodpecker) - نظام CI/CD خفيف ومفتوح المصدر بالكامل مستوحى من Drone.

### البنية التحتية ككود

- [Ansible](https://github.com/ansible/ansible) - أداة أتمتة بدون وكيل لإدارة الإعدادات والتزويد.
- [Atlantis](https://github.com/runatlantis/atlantis) - أتمتة سير عمل GitOps لمشاريع Terraform وOpenTofu.
- [Crossplane](https://github.com/crossplane/crossplane) - إطار عمل مستوى التحكم مبني على Kubernetes للبنية التحتية السحابية.
- [OpenTofu](https://github.com/opentofu/opentofu) - أداة بنية تحتية ككود تقوده المجتمع من Fork من Terraform.
- [Pulumi](https://github.com/pulumi/pulumi) - منصة بنية تحتية ككود تستخدم لغات برمجة مألوفة.

### المراقبة والملاحظات

- [Jaeger](https://github.com/jaegertracing/jaeger) - منصة تتبّع موزعة لمراقبة الخدمات المصغرة.
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-collector) - معيار مفتوح وأدوات لجمع بيانات القياس عن بعد.
- [Prometheus](https://github.com/prometheus/prometheus) - مجموعة مراقبة وتنبيهات مصممة للموثوقية والتوسع.
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - قاعدة بيانات سلاسل زمنية ومجموعة مراقبة عالية الأداء.

### الشبكات والوكيل العكسي

- [Caddy](https://github.com/caddyserver/caddy) - خادم ويب مع HTTPS تلقائي وتكوين بسيط.
- [CoreDNS](https://github.com/coredns/coredns) - خادم DNS مرن وقابل للتوسيع يُستخدم بشكل شائع في Kubernetes.
- [HAProxy](https://github.com/haproxy/haproxy) - موازن حمل ووكيل توفر عالٍ موثوق.
- [Nginx](https://github.com/nginx/nginx) - خادم ويب ووكيل عكسي عالي الأداء.
- [Traefik](https://github.com/traefik/traefik) - وكيل عكسي حديث ومراقب ingress مع اكتشاف تلقائي للخدمات.

### الأسرار والأمان

- [Falco](https://github.com/falcosecurity/falco) - مراقبة أمان في وقت التشغيل للحاويات وKubernetes.
- [Infisical](https://github.com/Infisical/infisical) - منصة إدارة أسرار مفتوحة المصدر للفرق والبنية التحتية.
- [Step CA](https://github.com/smallstep/certificates) - سلطة شهادات خاصة وحل لإدارة TLS آلي.
- [Trivy](https://github.com/aquasecurity/trivy) - ماسح أمان للحاويات وال dependencies وKubernetes وIaC.

## تطبيقات الجوال

### المتصفحات والإنترنت

- [Cromite](https://github.com/uazo/cromite) - fork لـ Chromium يركز على الخصوصية مع حظر الإعلانات.
- [Firefox for Android](https://github.com/mozilla-mobile/firefox-android) - متصفح جوال مفتوح المصدر طوّره Mozilla.
- [Fulguris](https://github.com/Slion/Fulguris) - متصفح Android خفيف يركز على الخصوصية.
- [Infinity for Reddit](https://github.com/Docile-Alligator/Infinity-For-Reddit) - عميل Reddit مفتوح المصدر لـ Android.
- [Mull](https://github.com/Divested-Mobile/Mull-Fenix) - fork لـ Firefox معزز للخصوصية على Android.

### إدارة الملفات والأدوات المساعدة

- [Material Files](https://github.com/zhanghai/MaterialFiles) - مدير ملفات Material Design لـ Android.
- [Neo Store](https://github.com/NeoApplications/Neo-Store) - عميل F-Droid حديث لـ Android.
- [Obtainium](https://github.com/ImranR98/Obtainium) - محدّث التطبيقات مباشرة من GitHub ومصادر أخرى.
- [SD Maid SE](https://github.com/d4rken-org/sdmaid-se) - أداة تنظيف وصيانة نظام Android.
- [Termux](https://github.com/termux/termux-app) - محاكي طرفية وبيئة Linux لـ Android.

### المشغّلات والتخصيص

- [Kvaesitso](https://github.com/MM2-0/Kvaesitso) - مشغّل يركز على البحث والإنتاجية.
- [Lawnchair](https://github.com/LawnchairLauncher/lawnchair) - مشغّل قابل للتخصيص لـ Android مستوحى من Pixel.
- [Neo Launcher](https://github.com/NeoApplications/Neo-Launcher) - fork لـ Lawnchair مع تخصيص محسّن.

### الوسائط المتعددة والموسيقى

- [Auxio](https://github.com/OxygenCobalt/Auxio) - مشغّل موسيقى محلي لـ Android يركز على البساطة والأداء.
- [Gramophone](https://github.com/FoedusProgramme/Gramophone) - مشغّل موسيقى محلي مستوحى من Material You لـ Android.
- [InnerTune](https://github.com/z-huang/InnerTune) - عميل YouTube Music حديث لـ Android.
- [Metrolist](https://github.com/MetrolistGroup/Metrolist) - عميل YouTube Music غني بالميزات لـ Android مع تشغيل بدون اتصال وompn synced وتصميم Material 3.
- [PixelPlayer](https://github.com/theovilardo/PixelPlayer) - مشغّل موسيقى Android يضع الخصوصية أولاً مبني بـ Material 3.
- [Retro Music](https://github.com/RetroMusicPlayer/RetroMusicPlayer) - مشغّل موسيقى Android أنيق مع واجهة حديثة.
- [RiMusic](https://github.com/fast4x/RiMusic) - مشغّل موسيقى Android جميل مدعوم بـ YouTube Music.
- [SpotiFLAC-Mobile](https://github.com/spotiflacapp/SpotiFLAC-Mobile) - رفيق جوال مفتوح المصدر لإدارة مكتبات الموسيقى الشخصية.
- [Symphony](https://github.com/zyrouge/symphony) - مشغّل موسيقى أنيق وخفيف مبني بـ Flutter.
- [ViMusic](https://github.com/vfsfitvnm/ViMusic) - تطبيق بث موسيقى خفيف مفتوح المصدر لـ Android.
- [Vinyl Music Player](https://github.com/VinylMusicPlayer/VinylMusicPlayer) - fork لـ Phonograph مع تجربة مشغّل موسيقى كلاسيكي على Android.

### المراسلة والاتصالات

- [Briar](https://github.com/briar/briar) - تطبيق مراسلة مشفر نظير إلى نظير.
- [Element](https://github.com/element-hq/element-android) - تطبيق مراسلة آمن مبني على Matrix.
- [FairEmail](https://github.com/M66B/FairEmail) - عميل بريد إلكتروني يركز على الخصوصية مع تخصيص واسع.
- [K-9 Mail](https://github.com/thunderbird/thunderbird-android) - عميل بريد إلكتروني مفتوح المصدر لـ Android.
- [Molly](https://github.com/mollyim/mollyim-android) - fork لـ Signal معزز لـ Android.
- [Session](https://github.com/session-foundation/session-android) - مراسل مشفر يركز على الخصوصية بدون أرقام هواتف.

### مدراء كلمات المرور والأمان

- [Aegis](https://github.com/beemdevelopment/Aegis) - تطبيق مصادقة آمن بعاملين.
- [Authenticator Pro](https://github.com/jamie-mh/AuthenticatorPro) - تطبيق مصادقة بعاملين مع نسخ احتياطي.
- [Bitwarden](https://github.com/bitwarden/android) - مدير كلمات مرور مفتوح المصدر لـ Android.
- [KeePassDX](https://github.com/Kunzisoft/KeePassDX) - مدير كلمات مرور متوافق مع KeePass.
- [Proton Pass](https://github.com/protonpass/android-pass) - مدير كلمات مرور طوّره Proton.

### الإنتاجية والملاحظات

- [Joplin](https://github.com/laurent22/joplin) - تطبيق أخذ ملاحظات وإدارة مهام مع دعم المزامنة.
- [Logseq](https://github.com/logseq/logseq) - تطبيق إدارة المعرفة والتفصيل.
- [Markor](https://github.com/gsantner/markor) - محرر Markdown وتطبيق أخذ ملاحظات لـ Android.
- [NoteGen](https://github.com/codexu/note-gen) - تطبيق أخذ ملاحظات Markdown محلي أولاً مع التقاط وتحرير ومزامنة اختيارية وتنظيم بمساعدة الذكاء الاصطناعي.
- [Notesnook](https://github.com/streetwriters/notesnook) - تطبيق أخذ ملاحظات مشفر يركز على الخصوصية.
- [Quillpad](https://github.com/quillpad/quillpad) - تطبيق أخذ ملاحظات بسيط مع Material You.
- [Standard Notes](https://github.com/standardnotes/app) - تطبيق ملاحظات مشفر من طرف إلى طرف.
- [Tasks.org](https://github.com/tasks/tasks) - تطبيق إدارة مهام مفتوح المصدر لـ Android.

### الفيديو والبث

- [Aniyomi](https://github.com/aniyomiorg/aniyomi) - fork لبث الأنمي وقارئ المانغا من Fork من Mihon.
- [Grayjay](https://github.com/futo-org/grayjay-android) - منصة وسائط موحدة تدعم مصادر محتوى متعددة.
- [Jellyfin Android](https://github.com/jellyfin/jellyfin-android) - عميل Android لخادم الوسائط Jellyfin.
- [LibreTube](https://github.com/libre-tube/LibreTube) - عميل YouTube يركز على الخصوصية يستخدم Piped.
- [Mihon](https://github.com/mihonapp/mihon) - قارئ مانغا مفتوح المصدر لـ Android.
- [NewPipe](https://github.com/TeamNewPipe/NewPipe) - واجهة أمامية YouTube خفيفة لـ Android بدون تبعيات Google.
- [Seal](https://github.com/JunkFood02/Seal) - محمّل فيديو وصوت مدعوم بـ yt-dlp.

## الأمان

### أمان الحاويات وKubernetes

- [Chainguard Images](https://github.com/chainguard-images/images) - صور حاويات مصغرة ومعززة تركز على أمان سلسلة التوريد.
- [Dockle](https://github.com/goodwithtech/dockle) - مدقق صور حاويات يركز على أفضل ممارسات الأمان.
- [Kube-bench](https://github.com/aquasecurity/kube-bench) - مدقق امتثال معايير CIS لـ Kubernetes.
- [Kube-hunter](https://github.com/aquasecurity/kube-hunter) - أداة اختبار اختراق ومراقبة أمان Kubernetes.
- [Kubescape](https://github.com/kubescape/kubescape) - منصة أمان Kubernetes لتحليل المخاطر ومسح الامتثال.
- [Kyverno](https://github.com/kyverno/kyverno) - محرك سياسات أصلي لـ Kubernetes للأمان والحوكمة والامتثال.

### أمان النهاية ووقت التشغيل

- [Chkrootkit](https://github.com/Magentron/chkrootkit) - مجموعة أدوات للكشف عن الجذور الخبيثة في أنظمة Unix.
- [Lynis](https://github.com/CISOfy/lynis) - أداة مراقبة أمان وتحسين لأنظمة Unix.
- [OpenEDR](https://github.com/ComodoSecurity/openedr) - منصة كشف النهاية والاستجابة لمراقبة وتحليل التهديدات.
- [Osquery](https://github.com/osquery/osquery) - إطار عمل تجهيز نظام التشغيل يكشف بيانات النظام عبر SQL.
- [Wazero](https://github.com/tetratelabs/wazero) - بيئة تشغيل WebAssembly آمنة لتنفيذ التطبيقات في صندوق رمل.

### أمان الشبكة والمراقبة

- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - IPS تعاوني ومنصة ذكاء التهديدات تحمي الخوادم والتطبيقات.
- [Security Onion](https://github.com/Security-Onion-Solutions/securityonion) - توزيعة Linux لكشف الاختراق و مراقبة أمان المؤسسات وإدارة السجلات.
- [Snort](https://github.com/snort3/snort3) - نظام كشف ومنع اختراق مفتوح المصدر يُستخدم على نطاق واسع.
- [Suricata](https://github.com/OISF/suricata) - محرك IDS وIPS ومراقبة أمان الشبكة عالي الأداء.
- [Wazuh](https://github.com/wazuh/wazuh) - منصة XDR وSIEM مفتوحة المصدر لكشف التهديدات والامتثال.
- [Zeek](https://github.com/zeek/zeek) - إطار تحليل شبكة قوي للمراقبة والرؤية الأمنية.

### الخصوصية وال withhold

- [Arkenfox user.js](https://github.com/arkenfox/user.js) - تكوين Firefox معزز يركز على الخصوصية والأمان.
- [GrapheneOS](https://github.com/GrapheneOS/platform_manifest) - نظام تشغيل محمي يركز على الخصوصية والأمان مبني على Android.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - جدار حماية التطبيقات ومراقب الاتصالات الصادرة لنظام Linux.
- [Tor](https://github.com/torproject/tor) - شبكة تراكبية مجهولة الهوية لحماية الخصوصية ومقاومة المراقبة.

### هندسة العكس واختبار الاختراق

- [Amass](https://github.com/owasp-amass/amass) - أداة رسم خرائط سطح الهجوم واكتشاف الأصول الخارجية.
- [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - مجموعة هندسة عكس البرمجيات طوّرتها NSA.
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - إطار اختبار اختراق لمراقبة الأمان وتطوير الثغرات.
- [Nmap](https://github.com/nmap/nmap) - أداة اكتشاف الشبكة ومراقبة الأمان.
- [OWASP ZAP](https://github.com/zaproxy/zaproxy) - ماسح أمان تطبيقات الويب مفتوح المصدر يدعمه OWASP.
- [Responder](https://github.com/lgandx/Responder) - مسمّم LLMNR وNBT-NS وMDNS يُستخدم بشكل شائع في تقييمات الشبكة الداخلية.
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - أداة حقن SQL آلية والاستيلاء على قواعد البيانات.
- [Wireshark](https://github.com/wireshark/wireshark) - محلل بروتوكولات الشبكة لاستكشاف الأخطاء وتفقد الحزم.
- [Hetty](https://github.com/dstotijn/hetty) - وكيل مفتوح المصدر يسمح بتعديل الحزم.

### إدارة الأسرار والتشفير

- [age](https://github.com/FiloSottile/age) - أداة تشفير ملفات بسيطة وحديثة وآمنة.
- [Cryptomator](https://github.com/cryptomator/cryptomator) - حل تخزين سحابي مشفر من جانب العميل يركز على الخصوصية.
- [HashiCorp Vault](https://github.com/hashicorp/vault) - منصة إدارة أسرار وتشفير لحماية البيانات الحساسة في البنية التحتية.
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - مراقب Kubernetes لإدارة الأسرار المشفرة بأمان في مستودعات Git.
- [SOPS](https://github.com/getsops/sops) - أداة لتشفير وإدارة ملفات التكوين المنظمة والأسرار.

### مسح وتحليل الثغرات الأمنية

- [Clair](https://github.com/quay/clair) - أداة تحليل ساكن لتحديد الثغرات في صور الحاويات.
- [Dependency-Track](https://github.com/DependencyTrack/dependency-track) - منصة أمان سلسلة توريد البرمجيات لتحليل SBOM وتتبع الثغرات.
- [Grype](https://github.com/anchore/grype) - ماسح ثغرات لصور الحاويات وأنظمة الملفات.
- [OpenSCAP](https://github.com/OpenSCAP/openscap) - إطار امتثال الأمان ومسح الثغرات يطبق معايير SCAP.
- [OWASP Dependency-Check](https://github.com/dependency-check/DependencyCheck) - أداة للكشف عن التبعيات المعرضة للثغرات في مشاريع البرمجيات.
- [Semgrep](https://github.com/semgrep/semgrep) - أداة تحليل ساكن للعثور على مشاكل الأمان في الكود المصدري.

## الاستضافة الذاتية

### منصات المطورين وخدمات Git

- [Gitea](https://github.com/go-gitea/gitea) - خدمة Git بسيطة وخفيفة ومُستضافة ذاتياً.
- [GitLab CE](https://github.com/gitlabhq/gitlabhq) - منصة DevOps كاملة مع التحكم في المصدر وميزات CI/CD.
- [Onedev](https://github.com/theonedev/onedev) - خادم Git شامل مع CI/CD وتتبع المشاكل.

### DNS والشبكات والخصوصية

- [AdGuard Home](https://github.com/AdguardTeam/AdGuardHome) - خادم DNS مُستضاف ذاتياً مع حظر الإعلانات والمتعقبين.
- [Headscale](https://github.com/juanfont/headscale) - خادم تنسيق مفتوح المصدر مُستضاف ذاتياً متوافق مع عملاء Tailscale.
- [NetBird](https://github.com/netbirdio/netbird) - منصة شبكة آمنة مبنية على WireGuard للاتصال الخاص.
- [Pi-hole](https://github.com/pi-hole/pi-hole) - حاصر إعلانات على مستوى الشبكة وحفرة DNS لتحسين الخصوصية.
- [Technitium DNS Server](https://github.com/TechnitiumSoftware/DnsServer) - خادم DNS قوي مفتوح المصدر مع دعم البروتوكولات الحديثة.

### مختبر المنزل وإدارة الخوادم

- [CapRover](https://github.com/caprover/caprover) - منصة PaaS مُستضافة ذاتياً خفيفة لنشر تطبيقات الويب مع Docker.
-CasaOS](https://github.com/IceWhaleTech/CasaOS) - نظام تشغيل سحابة شخصي بسيط وسهل للمبتدئين للتطبيقات المُستضافة ذاتياً.
- [Coolify](https://github.com/coollabsio/coolify) - بديل مفتوح المصدر مُستضاف ذاتياً لـ Heroku وNetlify وVercel.
- [Cosmos Server](https://github.com/azukaar/Cosmos-Server) - بوابة مُستضافة ذاتياً لإدارة التطبيقات والوكيل العكسي والمصادقة في واجهة واحدة.
- [Dokploy](https://github.com/Dokploy/dokploy) - منصة نشر حديثة مُستضافة ذاتياً مبنية لـ Docker وبيئات VPS.
- [Umbrel](https://github.com/getumbrel/umbrel) - منصة خادم شخصي لتشغيل التطبيقات والخدمات المُستضافة ذاتياً.
- [YunoHost](https://github.com/YunoHost/yunohost) - منصة استضافة ذاتية مبنية على Debian تركز على البساطة والخصوصية.

### خوادم الوسائط والبث

- [Audiobookshelf](https://github.com/advplyr/audiobookshelf) - خادم مُستضاف ذاتياً للكتب الصوتية والبودكاست مع تطبيقات حديثة ودعم البيانات الوصفية.
- [Azuracast](https://github.com/AzuraCast/AzuraCast) - حزمة إدارة radio web لمحطات radio مُستضافة ذاتياً.
- [Jellyfin](https://github.com/jellyfin/jellyfin) - خادم وسائط مفتوح المصدر بالكامل للأفلام ومسلسلات التلفزيون والموسيقى والتلفزيون المباشر.
- [Navidrome](https://github.com/navidrome/navidrome) - خادم بث موسيقى مُستضاف ذاتياً خفيف متوافق مع عملاء Subsonic.
- [Owncast](https://github.com/owncast/owncast) - خادم بث مباشر مُستضاف ذاتياً مع دردشة ودعم الاتحاد.
- [Tube Archivist](https://github.com/tubearchivist/tubearchivist) - خادم وسائط YouTube مُستضاف ذاتياً ومنصة أرشفة الفيديو.

### المراقبة والتشغيل

- [Beszel](https://github.com/henrygd/beszel) - منصة مراقبة خوادم خفيفة مع دعم Docker.
- [Checkmk](https://github.com/Checkmk/checkmk) - حل شامل لمراقبة تكنولوجيا المعلومات للخوادم والحاويات والشبكات.
- [Netdata](https://github.com/netdata/netdata) - منصة مراقبة واستكشاف أخطاء البنية التحتية في الوقت الحقيقي.
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - أداة مراقبة التشغيل مُستضافة ذاتياً مع صفحات الحالة والإشعارات.

### مدراء كلمات المرور والمصادقة

- [Authentik](https://github.com/goauthentik/authentik) - مزود هوية ومنصة مصادقة مُستضافة ذاتياً.
- [Kanidm](https://github.com/kanidm/kanidm) - خادم إدارة هوية حديث يركز على الأمان والبساطة.
- [LLDAP](https://github.com/lldap/lldap) - خادم LDAP خفيف للفرق الصغيرة وإعدادات مختبر المنزل.
- [Passbolt](https://github.com/passbolt/passbolt_api) - مدير كلمات مرور مفتوح المصدر مصمم للتعاون في الفريق.
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - خادم مدير كلمات مرور متوافق مع Bitwarden مكتوب بلغة Rust.

### الصور وإدارة الملفات

- [File Browser](https://github.com/filebrowser/filebrowser) - مدير ملفات مبني على الويب لإدارة الملفات على الخوادم البعيدة.
- [Immich](https://github.com/immich-app/immich) - حل نسخ احتياطي عالي الأداء للصور والفيديو مُستضاف ذاتياً مستوحى من Google Photos.
- [PhotoPrism](https://github.com/photoprism/photoprism) - تطبيق إدارة صور مُستضاف ذاتياً مدعوم بالذكاء الاصطناعي.
- [Piwigo](https://github.com/Piwigo/Piwigo) - منصة معرض صور مفتوحة المصدر مع دعم الإضافات.
- [Syncthing](https://github.com/syncthing/syncthing) - تطبيق مزامنة ملفات مستمرة لامركزي.

### RSS وقراءة لاحقاً والمعرفة

- [FreshRSS](https://github.com/FreshRSS/FreshRSS) - مُجمّع تغذية RSS خفيف ومُستضاف ذاتياً.
- [Hoarder](https://github.com/hoarder-app/hoarder) - مدير إشارات مرجعية مُستضاف ذاتياً مع تنظيم بمساعدة الذكاء الاصطناعي.
- [Karakeep](https://github.com/karakeep-app/karakeep) - منصة إشارات مرجعية وإدارة معرفة حديثة مُستضافة ذاتياً.
- [Miniflux](https://github.com/miniflux/v2) - قارئ RSS بسيط يركز على الأداء والبساطة.
- [Wallabag](https://github.com/wallabag/wallabag) - تطبيق مُستضاف ذاتياً لقراءة لاحقاً لحفظ مقالات الويب.

## البرمجيات / SaaS

### التحليلات والمراقبة

- [OpenReplay](https://github.com/openreplay/openreplay) - منصة إعادة تشغيل الجلسات والتحليلات لاستكشاف أخطاء مشاكل المستخدمين.
- [Plausible Analytics](https://github.com/plausible/analytics) - منصة تحليلات ويب خفيفة وصديقة للخصوصية.
- [Signoz](https://github.com/SigNoz/signoz) - منصة ملاحظات مفتوحة المصدر للمقياس والمسارات والسجلات.
- [Umami](https://github.com/umami-software/umami) - بديل لـ Google Analytics يركز على الخصوصية لتحليلات الويب.

### الأتمتة والأدوات الداخلية

- [Appsmith](https://github.com/appsmithorg/appsmith) - إطار عمل مفتوح المصدر لإنشاء التطبيقات الداخلية بسرعة.
- [Budibase](https://github.com/Budibase/budibase) - منصة منخفضة الكود للأدوات الداخلية والنماذج ولوحات العمليات.
- [n8n](https://github.com/n8n-io/n8n) - منصة أتمتة سير العمل مع الاستضافة الذاتية وتكاملات قابلة للتوسيع.
- [ToolJet](https://github.com/ToolJet/ToolJet) - منصة منخفضة الكود لبناء الأدوات الداخلية ولوحات الإدارة.

### الاتصالات والدعم

- [Chatwoot](https://github.com/chatwoot/chatwoot) - منصة تفاعل ودعم العملاء مع الدردشة المباشرة وال Blowjob متعدد القنوات.
- [Formbricks](https://github.com/formbricks/formbricks) - منصة مفتوحة المصدر لإدارة تجربة المنتج وردود الفعل.
- [Papercups](https://github.com/papercups-io/papercups) - منصة مفتوحة المصدر للدردشة المباشرة ومراسلة العملاء.
- [Typebot](https://github.com/baptisteArNo/typebot.io) - منشئ نماذج حوارية لإنشاء سير عمل تفاعلي بأسلوب الدردشة.

### التوثيق وقواعد المعرفة

- [Docs](https://github.com/suitenumerique/docs) - منصة تحرير تعاوني للوثائق تركز على الخصوصية والاستضافة الذاتية.
- [Documenso](https://github.com/documenso/documenso) - منصة مفتوحة المصدر لتوقيع الوثائق كبديل لـ DocuSign.
- [Outline](https://github.com/outline/outline) - قاعدة معرفة ومنصة توثيق تعاونية للفرق.
- [Wiki.js](https://github.com/requarks/wiki) - منصة wiki قوية ومفتوحة المصدر وقابلة للتوسيع.

### تخزين الملفات والسحابة

- [Cloudreve](https://github.com/cloudreve/Cloudreve) - نظام تخزين سحابي مُستضاف ذاتياً يدعم مزودي تخزين متعددين.
- [Filestash](https://github.com/mickael-kerjean/filestash) - عميل ويب حديث لإدارة الملفات على خلفيات تخزين متعددة.
- [Nextcloud](https://github.com/nextcloud/server) - سحابة إنتاجية مُستضافة ذاتياً مع مزامنة الملفات وأدوات التعاون والاتصال.
- [Seafile](https://github.com/haiwen/seafile) - منصة عالية الأداء لاستضافة ومزامنة الملفات مفتوحة المصدر.

### الإنتاجية والتعاون

- [AFFiNE](https://github.com/toeverything/AFFiNE) - مساحة عمل تعاونية شاملة تجمع بين المستفات وسبورات الرسم وقواعد البيانات.
- [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) - منصة مفتوحة المصدر لإدارة المعرفة والمساحة تعمل كبديل لـ Notion.
- [Erxes](https://github.com/erxes/erxes) - منصة مفتوحة المصدر لتسويق النمو والمبيعات وتفاعل العملاء.
- [Focalboard](https://github.com/mattermost/focalboard) - أداة إدارة المشاريع والمهام مُستضافة ذاتياً مستوحاة من Trello وNotion.
- [Plane](https://github.com/makeplane/plane) - منصة مفتوحة المصدر لإدارة المشاريع وتتبع المشاكل.
- [Twenty](https://github.com/twentyhq/twenty) - منصة CRM حديثة مفتوحة المصدر تركز على القابلية للتوسيع والملكية.

## تطوير الويب

### مكتبات UI لـ Angular

- [Angular Material](https://github.com/angular/components) - مكتبة مكونات Material Design لـ Angular يدعمها Google.
- [PrimeNG](https://github.com/primefaces/primeng) - مكتبة غنية لمكونات UI لـ Angular مع أداء عالي وخيارات تخصيص واسعة.
- [Taiga UI](https://github.com/taiga-family/taiga-ui) - حزمة UI قوية مفتوحة المصدر لـ Angular مع مجموعة كبيرة من المكونات والأدوات.
- [TailAdmin Angular](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - قالب لوحة إدارة Angular مفتوحة المصدر مبني بـ Tailwind CSS.

### محررات الكود

- [Eclipse Theia](https://github.com/eclipse-theia/theia) - منصة IDE مفتوحة المصدر مرنة تُستخدم في بيئات السحابة وسطح المكتب.
- [Helix](https://github.com/helix-editor/helix) - محرر اbitrary نامي بسرعة مع دعم LSP مدمج وإعدادات افتراضية حديثة.
- [Neovim](https://github.com/neovim/neovim) - محرر مبني على Vim شائع للغاية وقابل للتوسيع يركز على الأداء وسير العمل الحديث.
- [Visual Studio Code](https://github.com/microsoft/vscode) - المحرر الأكثر استخداماً مفutoh المصدر مع نظام إضافات ضخم.
- [VSCodium](https://github.com/VSCodium/vscodium) - توزيعة مفتوحة المصدر بالكامل لـ VS Code بدون مكونات تجارية.
- [Zed](https://github.com/zed-industries/zed) - محرر تعاوني عالي الأداء مع تبنٍّ سريع.

### أدوات التصميم

- [Excalidraw](https://github.com/excalidraw/excalidraw) - سبورة افتراضية لرسم مخططات بأسلوب الرسم اليدوي مع تعاون في الوقت الحقيقي ولوح لا نهائية.
- [Open Design](https://github.com/nexu-io/open-design) - أداة تصميم محلي أولاً بالذكاء الاصطناعي مع 19 مهارة و71 نظام تصميم بدرجة العلامة التجارية لإنشاء مقتنيات الويب والجوال والشرائح.
- [open-pencil](https://github.com/open-pencil/open-pencil) - محرر تصميم أصلي للذكاء الاصطناعي متوافق مع Figma مع CLI بدون رأس وخادم MCP وتصدير التصميم إلى الكود.

### الأيقونات

- [Bootstrap Icons](https://github.com/twbs/icons) - مكتبة أيقونات رسمية لـ Bootstrap.
- [Boxicons](https://github.com/atisawd/boxicons) - مكتبة أيقونات بسيطة ومرنة.
- [css.gg](https://github.com/astrit/css.gg) - نظام أيقونات CSS وSVG مفتوح المصدر.
- [Feather Icons](https://github.com/feathericons/feather) - أيقونات بسيطة ونظيفة مفتوحة المصدر.
- [Heroicons](https://github.com/tailwindlabs/heroicons) - مجموعة أيقونات رسمية لـ Tailwind CSS (خط وتعبئة).
- [Ionicons](https://github.com/ionic-team/ionicons) - حزمة أيقونات لـ Ionic والاستخدام العام.
- [Lucide Animated](https://github.com/pqoqubbw/icons) - مجموعة جميلة من الأيقونات المتحركة لـ React مبنية بـ Motion وLucide.
- [React Icons](https://github.com/react-icons/react-icons) - حزم أيقونات شائعة كمكونات React.
- [Morphicons](https://github.com/guillermolg00/morphicons) - مكتبة عالمية لتحويل الأيقونات مع فيزياء النوابض لتحريك الأيقونات المبنية على الخطوط.
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) - مكتبة أيقونات مفتوحة المصدر بأسلوب النظام.
- [Simple Icons](https://github.com/simple-icons/simple-icons) - أيقونات العلامات التجارية والشعارات بتنسيق SVG.
- [Tabler Icons](https://github.com/tabler/tabler-icons) - مجموعة أيقونات كبيرة ومتسقة ومدعومة بنشاط.

### مكتبات UI لـ React

- [Ant Design](https://github.com/ant-design/ant-design) - نظام تصميم على مستوى المؤسسات مع مكونات React قوية ومتسقة.
- [Chakra UI](https://github.com/chakra-ui/chakra-ui) - مكتبة معيارية تركز على إمكانية الوصول وتجربة مطور رائعة.
- [Material-UI (MUI)](https://github.com/mui/material-ui) - مكتبة مكونات React مبنية على Material Design، قابلة للتخصيص للغاية ومستخدمة على نطاق واسع.
- [NativeBase](https://github.com/GeekyAnts/NativeBase) - نظام مكونات utility-first لبناء واجهات مستخدم متسقة على الجوال والويب.
- [PrimeReact](https://github.com/primefaces/primereact) - حزمة شاملة من مكونات UI الغنية والمرنة ولا تعتمد على التصميم لـ React.
- [Streamdown](https://github.com/vercel/streamdown) - مكون React لعرض Markdown مع دعم البث للمحتوى المولّد بالذكاء الاصطناعي.
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - مكونات Bootstrap أُعيد بناؤها لـ React بدون تبعية لـ jQuery.
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React) - التكامل الرسمي لـ React لـ Semantic UI مع مكونات مُصرّح بها.

### مكونات UI

- [8bitcn](https://github.com/TheOrcDev/8bitcn-ui) - مكتبة مكونات UI بأسلوب 8-Bit مفتوحة المصدر.
- [Dotmatrix](https://github.com/zzzzshawn/matrix) - مكونات تحميل DOTMATRIX قابلة لإعادة الاستخدام قابلة للتثبيت عبر سجل shadcn أو النسخ اليدوي.
- [Flowbite](https://github.com/themesberg/flowbite) - مكتبة مكونات UI مفتوحة المصدر مبنية على Tailwind CSS مع عناصر تفاعلية.
- [Goey Toast](https://github.com/anl331/goey-toast) - مكتبة إشعارات منبثقة خفيفة الوزن وقابلة للتخصيص لتطبيقات الويب الحديثة.
- [Headless UI](https://github.com/tailwindlabs/headlessui) - بدائل UI غير مصممة قابلة للوصول بالكامل مصممة لـ Tailwind CSS.
- [LangUI](https://github.com/CommandCodeAI/langui) - مكونات Tailwind CSS مفتوحة المصدر لواجهات الذكاء الاصطناعي وأسلوب GPT.
- [loading-ui](https://github.com/turbostarter/loading-ui) - حالات تحميل وهمية ومؤشرات ت_positioning جميلة مفتوحة المصدر مصممة لتطبيقات React الحديثة مع Tailwind CSS.
- [shadcn/ui](https://github.com/shadcn-ui/ui) - مكونات UI مفتوحة المصدر copy-paste لـ React مبنية على Tailwind CSS.
- [uiverse](https://github.com/uiverse-io/galaxy) - عناصر UI مفتوحة المصدر تقودها المجتمع مبنية بـ HTML وCSS.

### مكتبات UI لـ Vue

- [Quasar](https://github.com/quasarframework/quasar) - إطار عمل Vue شامل لبناء SPAs وSSR وتطبيقات الجوال وسطح المكتب.
- [Vuetify](https://github.com/vuetifyjs/vuetify) - إطار عمل مكونات Material Design لـ Vue مع نظام بيئي كبير.

## المساهمة

المساهمات مرحب بها! إذا كنت ترغب في المساهمة:

1. اعمل fork لهذا المستودع وأنشئ فرع جديد: `feat/project-name`
2. أضف إدخالك في القسم المناسب في `README.md` واتبع التنسيق أدناه.
3. ادفع إلى الفرع (`git push origin feat/project-name`)
4. افتح Pull Request بعنوان مثل `feat: Project Name` مع شرح موجز لماذا هذا المشروع يستحق الوجود.

لمزيد من المعلومات عن المساهمة، يرجى الرجوع إلى [إرشادات المساهمة](CONTRIBUTING.md).

- ❤️ شكراً لمساهمتك في المشروع! مساعدتك مقدرة جداً.

<div align="center">
  
  <h3>المساهمون</h3>
  
  <a href="https://github.com/hadez8877/awesome-opensource/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=hadez8877/awesome-opensource" />
  </a>

</div>
