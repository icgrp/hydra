(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{135:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(268)),c=t(277),o={id:"ray_launcher",title:"Ray Launcher plugin",sidebar_label:"Ray Launcher plugin"},u={unversionedId:"plugins/ray_launcher",id:"plugins/ray_launcher",isDocsHomePage:!1,title:"Ray Launcher plugin",description:"PyPI",source:"@site/docs/plugins/ray_launcher.md",slug:"/plugins/ray_launcher",permalink:"/docs/next/plugins/ray_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/ray_launcher.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1615524569,sidebar_label:"Ray Launcher plugin",sidebar:"docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/next/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/next/plugins/rq_launcher"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>ray_aws</code> launcher",id:"ray_aws-launcher",children:[]},{value:"<code>ray</code> launcher",id:"ray-launcher",children:[]},{value:"Configure <code>ray.init()</code> and <code>ray.remote()</code>",id:"configure-rayinit-and-rayremote",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-ray-launcher/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-ray-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-ray-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-ray-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-ray-launcher"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-ray-launcher.svg",alt:"PyPI - Downloads"}))),Object(i.b)(c.a,{text:"Example application",to:"plugins/hydra_ray_launcher/examples",mdxType:"ExampleGithubLink"}),Object(i.b)(c.a,{text:"Plugin source",to:"plugins/hydra_ray_launcher",mdxType:"ExampleGithubLink"})),Object(i.b)("p",null,"The Ray Launcher plugin provides 2 launchers: ",Object(i.b)("inlineCode",{parentName:"p"},"ray_aws")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ray"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"ray_aws")," launches jobs remotely on AWS and is built on top of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/cluster/launcher.html"}),"Ray cluster launcher"),". ",Object(i.b)("inlineCode",{parentName:"p"},"ray")," launches jobs on your local machine or existing ray cluster. "),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip install hydra-ray-launcher --pre\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=ray_aws")," or ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=ray")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - override hydra/launcher: ray_aws\n")),Object(i.b)("h3",{id:"ray_aws-launcher"},Object(i.b)("inlineCode",{parentName:"h3"},"ray_aws")," launcher"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"ray_aws")," launcher is built on top of ray's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.ray.io/en/latest/cluster/launcher.html"}),"cluster launcher cli"),". To get started, you need to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"config your AWS credentials"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects your AWS credentials have certain permissions for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/ec2"}),Object(i.b)("inlineCode",{parentName:"a"},"EC2"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/iam"}),Object(i.b)("inlineCode",{parentName:"a"},"IAM")),". Read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ray-project/ray/issues/9327"}),"this")," for more information."))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ray cluster launcher")," expects a yaml file to provide configuration for the EC2 cluster; we've schematized the configs in ",Object(i.b)(c.b,{to:"plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/_config.py",mdxType:"GithubLink"},"here")),Object(i.b)("details",null,Object(i.b)("summary",null,"Discover ray_aws launcher's config"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py hydra/launcher=ray_aws --cfg hydra -p hydra.launcher\n# @package hydra.launcher\n_target_: hydra_plugins.hydra_ray_launcher.ray_aws_launcher.RayAWSLauncher\nenv_setup:\n  pip_packages:\n    omegaconf: 2.0.5\n    hydra_core: 1.0.4\n    ray: 1.0.1.post1\n    cloudpickle: 1.6.0\n    pickle5: 0.0.11\n    hydra_ray_launcher: 0.1.2\n  commands:\n  - conda create -n hydra_${python_version:micro} python=${python_version:micro} -y\n  - echo 'export PATH=\"$HOME/anaconda3/envs/hydra_${python_version:micro}/bin:$PATH\"'\n    >> ~/.bashrc\nray:\n  init:\n    address: null\n  remote: {}\n  cluster:\n    cluster_name: default\n    min_workers: 0\n    max_workers: 1\n    initial_workers: 0\n    autoscaling_mode: default\n    target_utilization_fraction: 0.8\n    idle_timeout_minutes: 5\n    docker:\n      image: ''\n      container_name: ''\n      pull_before_run: true\n      run_options: []\n    provider:\n      type: aws\n      region: us-west-2\n      availability_zone: us-west-2a,us-west-2b\n      cache_stopped_nodes: false\n      key_pair:\n        key_name: hydra\n    auth:\n      ssh_user: ubuntu\n    head_node:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    worker_nodes:\n      InstanceType: m5.large\n      ImageId: ami-008d8ed4bd7dc2485\n    file_mounts: {}\n    initialization_commands: []\n    setup_commands: []\n    head_setup_commands: []\n    worker_setup_commands: []\n    head_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --head --redis-port=6379 --object-manager-port=8076\n      --autoscaling-config=~/ray_bootstrap_config.yaml\n    worker_start_ray_commands:\n    - ray stop\n    - ulimit -n 65536; ray start --address=$RAY_HEAD_IP:6379 --object-manager-port=8076\nstop_cluster: true\nsync_up:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\nsync_down:\n  source_dir: null\n  target_dir: null\n  include: []\n  exclude: []\n"))),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("p",null,"The following examples can be found ",Object(i.b)(c.b,{to:"plugins/hydra_ray_launcher/examples",mdxType:"GithubLink"},"here"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Simple app"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py --multirun task=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpqqg4v4i7/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml.\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=3374) [__main__][INFO] - Executing task 1\n(pid=3374) [__main__][INFO] - Executing task 2\n(pid=3374) [__main__][INFO] - Executing task 3\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] Deleted the cluster (provider.cache_stopped_nodes=false)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpaa07pq3w.yaml']\n\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"Upload & Download from remote cluster"),Object(i.b)("p",null,"If your application is dependent on multiple modules, you can configure ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher.sync_up")," to upload dependency modules to the remote cluster.\nYou can also configure ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher.sync_down")," to download output from remote cluster if needed. This functionality is built on top of ",Object(i.b)("inlineCode",{parentName:"p"},"rsync"),", ",Object(i.b)("inlineCode",{parentName:"p"},"include")," and ",Object(i.b)("inlineCode",{parentName:"p"},"exclude")," is consistent with how it works in ",Object(i.b)("inlineCode",{parentName:"p"},"rsync"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"\n$  python train.py --multirun random_seed=1,2,3\n[HYDRA] Ray Launcher is launching 3 jobs, \n[HYDRA]        #0 : random_seed=1\n[HYDRA]        #1 : random_seed=2\n[HYDRA]        #2 : random_seed=3\n[HYDRA] Pickle for jobs: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmptdkye9of/job_spec.pkl\n[HYDRA] Saving RayClusterConf in a temp yaml file: /var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml.\n[HYDRA] Running command: ['ray', 'up', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmp2reaoixs.yaml']\n...\n[HYDRA] Output: INFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8265\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\n(pid=1772) [__main__][INFO] - Start training...\n(pid=1772) [INFO] - Init my model\n(pid=1772) [INFO] - Created dir for checkpoints. dir=checkpoint\nLoaded cached provider configuration\n...\n[HYDRA] Output: receiving file list ... done\n16-32-25/\n16-32-25/0/\n16-32-25/0/checkpoint/\n16-32-25/0/checkpoint/checkpoint_1.pt\n16-32-25/1/\n16-32-25/1/checkpoint/\n16-32-25/1/checkpoint/checkpoint_2.pt\n16-32-25/2/\n16-32-25/2/checkpoint/\n16-32-25/2/checkpoint/checkpoint_3.pt\n...\n[HYDRA] Stopping cluster now. (stop_cluster=true)\n[HYDRA] NOT deleting the cluster (provider.cache_stopped_nodes=true)\n[HYDRA] Running command: ['ray', 'down', '-y', '/var/folders/n_/9qzct77j68j6n9lh0lw3vjqcn96zxl/T/tmpy430k4xr.yaml']\n"))),Object(i.b)("h5",{id:"manage-cluster-lifecycle"},"Manage Cluster LifeCycle"),Object(i.b)("p",null,"You can manage the Ray EC2 cluster lifecycle by configuring the two flags provided by the plugin:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default setting (no need to specify on commandline): Delete cluster after job finishes remotely:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=true\nhydra.launcher.ray.cluster.provider.cache_stopped_nodes=False\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keep cluster running after jobs finishes remotely")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.stop_cluster=False\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Power off EC2 instances without deletion")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"hydra.launcher.ray.cluster.provider.cache_stopped_nodes=true\n")),Object(i.b)("h3",{id:"ray-launcher"},Object(i.b)("inlineCode",{parentName:"h3"},"ray")," launcher"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ray")," launcher lets you launch application on your ray cluster or local machine. You can easily config how your jobs are executed by changing ",Object(i.b)("inlineCode",{parentName:"p"},"ray")," launcher's configuration here\n",Object(i.b)("inlineCode",{parentName:"p"},"~/hydra/plugins/hydra_ray_launcher/hydra_plugins/hydra_ray_launcher/conf/hydra/launcher/ray.yaml")),Object(i.b)("p",null," The ",Object(i.b)(c.b,{to:"plugins/hydra_ray_launcher/examples/simple",mdxType:"GithubLink"},"example application")," starts a new ray cluster."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py  --multirun hydra/launcher=ray\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-16-28\n[HYDRA] Initializing ray with config: {}\nINFO services.py:1164 -- View the Ray dashboard at http://127.0.0.1:8266\n[HYDRA]        #0 : \n(pid=97801) [__main__][INFO] - Executing task 1\n")),Object(i.b)("p",null,"You can run the example application on your existing ray cluster as well by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init.address"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py  --multirun hydra/launcher=ray hydra.launcher.ray.init.address=localhost:6379'\n[HYDRA] Ray Launcher is launching 1 jobs, sweep output dir: multirun/2020-11-10/15-13-32\n[HYDRA] Initializing ray with config: {'num_cpus': None, 'num_gpus': None, 'address': 'localhost:6379'}\nINFO worker.py:633 -- Connecting to existing Ray cluster at address: 10.30.99.17:6379\n[HYDRA]        #0 : \n(pid=93358) [__main__][INFO] - Executing task 1\n")),Object(i.b)("h3",{id:"configure-rayinit-and-rayremote"},"Configure ",Object(i.b)("inlineCode",{parentName:"h3"},"ray.init()")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"ray.remote()")),Object(i.b)("p",null,"Ray launcher is built on top of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-init"}),Object(i.b)("inlineCode",{parentName:"a"},"ray.init()")),"\nand ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.ray.io/en/master/package-ref.html?highlight=ray.remote#ray-remote"}),Object(i.b)("inlineCode",{parentName:"a"},"ray.remote()")),".\nYou can configure ",Object(i.b)("inlineCode",{parentName:"p"},"ray")," by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.init")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher.ray.remote"),".\nCheck out an ",Object(i.b)(c.b,{to:"plugins/hydra_ray_launcher/examples/simple/config.yaml",mdxType:"GithubLink"},"example config"),"."))}p.isMDXComponent=!0},268:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),b=a,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return t?r.a.createElement(h,o(o({ref:n},l),{},{components:t})):r.a.createElement(h,o({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},269:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},270:function(e,n,t){"use strict";t.r(n);var a=t(11);t.d(n,"MemoryRouter",(function(){return a.d})),t.d(n,"Prompt",(function(){return a.f})),t.d(n,"Redirect",(function(){return a.g})),t.d(n,"Route",(function(){return a.h})),t.d(n,"Router",(function(){return a.i})),t.d(n,"StaticRouter",(function(){return a.j})),t.d(n,"Switch",(function(){return a.k})),t.d(n,"generatePath",(function(){return a.l})),t.d(n,"matchPath",(function(){return a.m})),t.d(n,"useHistory",(function(){return a.n})),t.d(n,"useLocation",(function(){return a.o})),t.d(n,"useParams",(function(){return a.p})),t.d(n,"useRouteMatch",(function(){return a.q})),t.d(n,"withRouter",(function(){return a.r})),t.d(n,"BrowserRouter",(function(){return a.a})),t.d(n,"HashRouter",(function(){return a.b})),t.d(n,"Link",(function(){return a.c})),t.d(n,"NavLink",(function(){return a.e}))},271:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(11),c=t(269),o=t(7),u=Object(a.createContext)({collectLink:function(){}}),l=t(272),s=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};n.a=function(e){var n,t,p,d=e.isNavLink,b=e.to,h=e.href,m=e.activeClassName,y=e.isActive,f=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,j=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(l.b)().withBaseUrl,_=Object(a.useContext)(u),w=b||h,N=Object(c.a)(w),D=null==w?void 0:w.replace("pathname://",""),x=void 0!==D?(t=D,O&&function(e){return e.startsWith("/")}(t)?v(t):t):void 0,k=Object(a.useRef)(!1),A=d?i.e:i.c,C=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!C&&N&&window.docusaurus.prefetch(x),function(){C&&p&&p.disconnect()}}),[x,C,N]);var R=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,P=!x||!N||R;return x&&N&&!R&&!f&&_.collectLink(x),P?r.a.createElement("a",Object.assign({href:x},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},j)):r.a.createElement(A,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var n,t;C&&e&&N&&(n=e,t=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(n),p.disconnect(),t())}))}))).observe(n))},to:x||""},d&&{isActive:y,activeClassName:m}))}},272:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var a=t(21),r=t(269);function i(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,c=i.forcePrependBaseUrl,o=void 0!==c&&c,u=i.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(o)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(i,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},273:function(e,n,t){try{e.exports=t(274)}catch(a){e.exports={}}},274:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var a=t(270),r=t(275),i=t(276);n.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},n.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),r=a.useLocation().pathname;return i.getActivePlugin(t,r,e)},n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),r=a.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,r)}},n.useVersions=function(e){return n.useDocsData(e).versions},n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)},n.useActiveVersion=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getActiveVersion(t,r)},n.useActiveDocContext=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getActiveDocContext(t,r)},n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),r=a.useLocation().pathname;return i.getDocVersionSuggestions(t,r)}},275:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return c}));var a=t(21);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=r()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function c(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},276:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var a=t(270);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var r=Object.entries(e).find((function(e){e[0];var t=e[1];return!!a.matchPath(n,{path:t.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for pathname="+n+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},n.getActiveVersion=function(e,t){var r=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(t,{path:e.path,exact:!1,strict:!1})}))},n.getActiveDocContext=function(e,t){var r,i,c=n.getActiveVersion(e,t),o=null==c?void 0:c.docs.find((function(e){return!!a.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:c,activeDoc:o,alternateDocVersions:o?(r=o.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===r&&(i[e.name]=n)}))})),i):{}}},n.getDocVersionSuggestions=function(e,t){var a=n.getLatestVersion(e),r=n.getActiveDocContext(e,t),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}},277:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return s}));var a=t(3),r=t(0),i=t.n(r),c=t(271),o=t(21),u=t(273);function l(e){return i.a.createElement(c.a,Object(a.a)({},e,{to:(n=e.to,r=Object(u.useActiveVersion)(),Object(o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(t=null==r?void 0:r.name)&&void 0!==t?t:"current"]+n),target:"_blank"}));var n,t,r}function s(e){var n,t=null!==(n=e.text)&&void 0!==n?n:"Example";return i.a.createElement(l,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}}}]);