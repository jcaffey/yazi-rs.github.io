"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[213],{4142:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=i(1527),t=i(6225);const l={id:"overview",sidebar_position:0,sidebar_label:"Plugin",description:"Learn how to extend Yazi with Lua plugins."},r="Plugins (BETA)",c={id:"plugins/overview",title:"Plugins (BETA)",description:"Learn how to extend Yazi with Lua plugins.",source:"@site/docs/plugins/overview.md",sourceDirName:"plugins",slug:"/plugins/overview",permalink:"/docs/plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",sidebar_position:0,sidebar_label:"Plugin",description:"Learn how to extend Yazi with Lua plugins."},sidebar:"docsSidebar",previous:{title:"theme.toml",permalink:"/docs/configuration/theme"},next:{title:"Common",permalink:"/docs/plugins/common"}},d={},o=[{value:"Usage",id:"usage",level:2},{value:"Functional plugin",id:"functional-plugin",level:3},{value:"Sync vs Async",id:"sync-vs-async",level:2},{value:"Sync context",id:"sync-context",level:3},{value:"Async context",id:"async-context",level:3},{value:"Interface",id:"interface",level:2},{value:"Previewer",id:"previewer",level:3},{value:"Preloader",id:"preloader",level:3},{value:"Debugging",id:"debugging",level:2},{value:"Logging",id:"logging",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugins-beta",children:"Plugins (BETA)"}),"\n",(0,s.jsxs)(n.p,{children:["You can extend Yazi's functionality through Lua plugins, which need to be placed in the ",(0,s.jsx)(n.code,{children:"plugins"})," subdirectory of Yazi's configuration directory, so either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"~/.config/yazi/plugins/"})," on Unix-like systems."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C:\\Users\\USERNAME\\AppData\\Roaming\\yazi\\config\\plugins\\"})," on Windows."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"~/.config/yazi/\n\u251c\u2500\u2500 init.lua\n\u251c\u2500\u2500 plugins/\n\u2502\xa0\xa0 \u251c\u2500\u2500 fzf.yazi/\n\u2502\xa0\xa0 \u2514\u2500\u2500 zoxide.yazi/\n\u2514\u2500\u2500 yazi.toml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Each plugin is a directory ending with ",(0,s.jsx)(n.code,{children:".yazi"}),", containing an ",(0,s.jsx)(n.code,{children:"init.lua"})," file for the plugin's initialization.\nFor instance, the structure of the ",(0,s.jsx)(n.code,{children:"zoxide"})," plugin is as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"zoxide.yazi/\n\u2514\u2500\u2500 init.lua\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"A plugin has two usages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#functional-plugin",children:"Functional plugin"}),": Bind the ",(0,s.jsx)(n.code,{children:"plugin"})," command to a key in ",(0,s.jsx)(n.code,{children:"keymap.toml"}),", and activate it by pressing the key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/configuration/yazi#plugin",children:"Custom previewers, preloaders"}),": Configure them as ",(0,s.jsx)(n.code,{children:"previewers"})," or ",(0,s.jsx)(n.code,{children:"preloaders"})," in your ",(0,s.jsx)(n.code,{children:"[plugin]"})," of ",(0,s.jsx)(n.code,{children:"yazi.toml"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"functional-plugin",children:"Functional plugin"}),"\n",(0,s.jsxs)(n.p,{children:["You can bind a ",(0,s.jsx)(n.code,{children:"plugin"})," command to a specific key in your ",(0,s.jsx)(n.code,{children:"keymap.toml"})," with:"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Options/Arguments"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"[name]"})}),(0,s.jsx)(n.td,{children:"The name of the plugin to run."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--sync"})}),(0,s.jsx)(n.td,{children:"Run the plugin in a sync context."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--args=[args]"})}),(0,s.jsx)(n.td,{children:"Shell-style arguments passed to the plugin."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.code,{children:"plugin test --sync --args='foo bar'"})," will run the ",(0,s.jsx)(n.code,{children:"test"})," plugin with the arguments ",(0,s.jsx)(n.code,{children:"foo"})," and ",(0,s.jsx)(n.code,{children:"bar"})," in a sync context."]}),"\n",(0,s.jsxs)(n.p,{children:["To receive the arguments in the plugin, use ",(0,s.jsx)(n.code,{children:"args"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/plugins/test.yazi/init.lua\nreturn {\n\tentry = function(self, args)\n\t\tya.err(args[1]) -- "foo"\n\t\tya.err(args[2]) -- "bar"\n\tend,\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sync-vs-async",children:"Sync vs Async"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin system is designed with an async-first philosophy. Therefore, unless specifically specified, such as the ",(0,s.jsx)(n.code,{children:"--sync"})," for the ",(0,s.jsx)(n.code,{children:"plugin"})," command, all plugins run in an async context."]}),"\n",(0,s.jsxs)(n.p,{children:["There is one exception - all ",(0,s.jsx)(n.code,{children:"init.lua"})," are synchronous, which includes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"init.lua"})," for Yazi itself, i.e. ",(0,s.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"init.lua"})," for each plugin, e.g. ",(0,s.jsx)(n.code,{children:"~/.config/yazi/plugins/zoxide.yazi/init.lua"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is because ",(0,s.jsx)(n.code,{children:"init.lua"})," is commonly used to initialize plugin configurations, and this process is synchronous:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/init.lua\n\n-- Initialize the zoxide plugin\n-- Which needs `~/.config/yazi/plugins/zoxide.yazi/init.lua` to export a `setup` function\nrequire("zoxide").setup {\n\tfoo = "hello",\n\tbar = "world",\n\t-- ...\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"sync-context",children:"Sync context"}),"\n",(0,s.jsxs)(n.p,{children:["The sync context accompanies the entire app lifecycle, which is active during UI rendering (UI plugins), and on executing sync functional plugins (",(0,s.jsx)(n.code,{children:"plugin"})," command with ",(0,s.jsx)(n.code,{children:"--sync"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"For better performance, the sync context is created only at the app's start and remains singular throughout. Thus, plugins running within this context share states,\nprompting plugin developers to use plugin-specific state persistence for their plugins to prevent global space contamination:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/test.yazi/init.lua\nreturn {\n  entry = function()\n    state.i = state.i or 0\n    ya.err("i = " .. state.i)\n\n    state.i = state.i + 1\n  end,\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Yazi initializes the ",(0,s.jsx)(n.code,{children:"state"})," for each ",(0,s.jsx)(n.em,{children:"sync"})," plugin before running, and it exists independently for them throughout the entire lifecycle.\nDo the ",(0,s.jsx)(n.code,{children:"plugin --sync test"})," three times, and you will see the log output:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"i = 0\ni = 1\ni = 2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"async-context",children:"Async context"}),"\n",(0,s.jsx)(n.p,{children:"When a plugin is executed asynchronously, an isolated async context is created for it automatically."}),"\n",(0,s.jsx)(n.p,{children:"In this context, you can use all the async functions supported by Yazi, and it operates concurrently with the main thread, ensuring that the main thread is not blocked."}),"\n",(0,s.jsx)(n.p,{children:'You can also obtain a small amount of app data from the sync context by calling a "sync function" (Needs the latest main branch at the moment):'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- ~/.config/yazi/plugins/my-async-plugin.yazi/init.lua\n\nlocal get_hovered_url = ya.sync(function(a, b)\n\t-- You can access all app data through the `cx`,\n\t-- within the `sync()` block, in an async plugin\n\tlocal h = cx.active.current.hovered\n\treturn h and a..tostring(h.url) or b\nend)\n\nreturn {\n\tentry = function()\n\t\tlocal h = get_hovered_url("this is a", "this is b")\n\t\t-- Do some time-consuming work, such as reading file, network request, etc.\n\t\t-- It will execute concurrently with the main thread\n\tend,\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.h3,{id:"previewer",children:"Previewer"}),"\n",(0,s.jsxs)(n.p,{children:["A previewer needs to return a table that implements the ",(0,s.jsx)(n.code,{children:"peek"})," and ",(0,s.jsx)(n.code,{children:"seek"})," functions. Both functions take a table parameter ",(0,s.jsx)(n.code,{children:"self"})," and do not return any values:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"return {\n\tpeek = function(self) return end,\n\tseek = function(self) return end,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the user presses ",(0,s.jsx)(n.code,{children:"j"})," or ",(0,s.jsx)(n.code,{children:"k"})," to switch between hovering files, ",(0,s.jsx)(n.code,{children:"peek"})," is called, with:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"}),": The ",(0,s.jsx)(n.a,{href:"/docs/plugins/common#file",children:"File"})," to be previewed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"skip"}),": The number of units to skip. The units largely depend on your previewer, such as lines for code and percentages for videos."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area"}),": The ",(0,s.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the available preview area."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"window"}),": The ",(0,s.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the entire terminal window."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the user presses ",(0,s.jsx)(n.code,{children:"Alt-j"})," or ",(0,s.jsx)(n.code,{children:"Alt-k"})," to scroll the preview of this file, ",(0,s.jsx)(n.code,{children:"seek"})," is called, with:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"file"}),": The ",(0,s.jsx)(n.a,{href:"/docs/plugins/common#file",children:"File"})," being scrolled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"area"}),": The ",(0,s.jsx)(n.a,{href:"/docs/plugins/layout#rect",children:"Rect"})," of the available preview area."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The task of ",(0,s.jsx)(n.code,{children:"peek"})," is to draw in the preview area based on the values of ",(0,s.jsx)(n.code,{children:"file"})," and ",(0,s.jsx)(n.code,{children:"skip"}),". This process is asynchronous."]}),"\n",(0,s.jsxs)(n.p,{children:["The task of ",(0,s.jsx)(n.code,{children:"seek"})," is to change the value of ",(0,s.jsx)(n.code,{children:"skip"})," based on user behavior and trigger ",(0,s.jsx)(n.code,{children:"peek"})," again. It is synchronous, meaning you can access ",(0,s.jsx)(n.a,{href:"/docs/plugins/common#app-data",children:"app data"})," through ",(0,s.jsx)(n.code,{children:"cx"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here are some preset previewers and preloaders you can refer to: ",(0,s.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/tree/main/yazi-plugin/preset/plugins",children:"Yazi Preset Plugins"})]}),"\n",(0,s.jsx)(n.h3,{id:"preloader",children:"Preloader"}),"\n",(0,s.jsxs)(n.p,{children:["You need to return a table that implements the ",(0,s.jsx)(n.code,{children:"preload"})," function, it receives a ",(0,s.jsx)(n.code,{children:"self"})," parameter, which is a table with the same fields as ",(0,s.jsx)(n.a,{href:"#previewer",children:(0,s.jsx)(n.code,{children:"peek"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"return {\n\tpreload = function(self)\n\t\treturn 1\n\tend,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"And has the following return values:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Binary"}),(0,s.jsx)(n.th,{children:"Decimal"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 0"})}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Failure, don't continue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0 1"})}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Success, don't continue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1 0"})}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Failure, continue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1 1"})}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Success, continue"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'When "continue" is set, the preloader can reload the files that have already been loaded at the next time point, such as when the user scrolls, leading to a page switch. This is usually done for the either:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retrying in case of file loading failure"}),"\n",(0,s.jsx)(n.li,{children:"Refreshing the file status upon successful loading"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Yazi will automatically invoke the ",(0,s.jsx)(n.code,{children:"preload"})," concurrently for each file that matches the preload rules on the page."]}),"\n",(0,s.jsxs)(n.p,{children:["When the user specifies ",(0,s.jsx)(n.a,{href:"/docs/configuration/yazi#preloaders",children:(0,s.jsx)(n.code,{children:"multi = true"})})," for it, the plugin allows preloading multiple files at once. In this case, ",(0,s.jsx)(n.code,{children:"self.file"})," will be replaced by ",(0,s.jsx)(n.code,{children:"self.files"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Typically, a preloader only needs to implement one of them - either single or multiple. This depends on the specific task and the magnitude of the workload.\nIf it truly requires loading multiple files at once, the user needs to be prompted to enable the ",(0,s.jsx)(n.code,{children:"multi"})," option for it."]}),"\n",(0,s.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsxs)(n.p,{children:["Please ensure that your ",(0,s.jsx)(n.code,{children:"~/.config/yazi/init.lua"})," includes valid Lua code with the correct syntax, otherwise will result in Yazi being unable to parse and execute your ",(0,s.jsx)(n.code,{children:"init.lua"})," to initialize."]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend installing a Lua plugin in your editor for syntax checking to avoid any syntax errors.\nFor example, install the ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=sumneko.lua",children:"Lua plugin"})," for VSCode, and for Neovim, use ",(0,s.jsx)(n.a,{href:"https://github.com/neovim/nvim-lspconfig",children:"nvim-lspconfig"})," to configure your Lua LSP."]}),"\n",(0,s.jsxs)(n.p,{children:["If you have no experience with Lua, you can quickly get started through ",(0,s.jsx)(n.a,{href:"https://learnxinyminutes.com/docs/lua/",children:"https://learnxinyminutes.com/docs/lua/"})]}),"\n",(0,s.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,s.jsxs)(n.p,{children:["Once you get started, if you want to debug some runtime data, use ",(0,s.jsx)(n.a,{href:"/docs/plugins/utils#dbgmsg",children:(0,s.jsx)(n.code,{children:"ya.dbg()"})})," and ",(0,s.jsx)(n.a,{href:"/docs/plugins/utils#errmsg",children:(0,s.jsx)(n.code,{children:"ya.err()"})})," to print what you want to debug to either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"~/.local/state/yazi/yazi.log"})," on Unix-like systems."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"C:\\Users\\USERNAME\\AppData\\Roaming\\yazi\\state\\yazi.log"})," on Windows."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},6225:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(959);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);