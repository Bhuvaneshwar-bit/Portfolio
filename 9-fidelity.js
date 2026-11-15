const portfolioTools=[
  [
    "JavaScript",
    "JS",
    "language",
    "Event \u2192 function \u2192 update",
    "Runs the interaction logic in the browser.",
    "click()|handleEvent()|updateUI()",
    "Web interfaces",
    "flow"
  ],
  [
    "Java",
    "JAVA",
    "language",
    "Source \u2192 compile \u2192 run",
    "A language used for application logic and DSA practice.",
    "Main.java|javac|JVM",
    "Languages / DSA",
    "build"
  ],
  [
    "SQL",
    "SQL",
    "language",
    "Query \u2192 filter \u2192 rows",
    "Queries structured relational data.",
    "SELECT|WHERE|rows",
    "Languages / databases",
    "query"
  ],
  [
    "React",
    "RE",
    "frontend",
    "Components \u2192 interface",
    "Builds interfaces from reusable components.",
    "Header|Card|Page",
    "ReGeo / EduBridge",
    "assemble"
  ],
  [
    "React Hooks",
    "{}",
    "frontend",
    "State \u2192 render \u2192 effect",
    "Connects component state and effects to UI updates.",
    "useState|render|useEffect",
    "React workflow",
    "flow"
  ],
  [
    "Angular",
    "NG",
    "frontend",
    "Template \u2192 component \u2192 view",
    "Organizes typed, component-based web interfaces.",
    "template|component|view",
    "Frontend toolkit",
    "assemble"
  ],
  [
    "HTML5",
    "HTML",
    "frontend",
    "Structure \u2192 page",
    "Gives web content its semantic structure.",
    "header|main|footer",
    "Web foundations",
    "assemble"
  ],
  [
    "CSS",
    "CSS",
    "frontend",
    "Rules \u2192 layout",
    "Controls layout, responsive behavior and visual presentation.",
    "grid|gap|layout",
    "Web foundations",
    "assemble"
  ],
  [
    "Vite",
    "VITE",
    "frontend",
    "Module \u2192 bundle \u2192 app",
    "Builds and serves modern frontend projects.",
    "modules|bundle|dist/",
    "Nila / EduBridge",
    "build"
  ],
  [
    "Node.js",
    "NODE",
    "backend",
    "Request \u2192 handler \u2192 response",
    "Runs JavaScript on the server for backend workflows.",
    "request|handler|response",
    "Gravity / EduBridge",
    "flow"
  ],
  [
    "Express.js",
    "EX",
    "backend",
    "Route \u2192 middleware \u2192 response",
    "Routes incoming requests through an API.",
    "/api|middleware|JSON",
    "Backend toolkit",
    "flow"
  ],
  [
    "REST APIs",
    "API",
    "backend",
    "Client \u2192 endpoint \u2192 result",
    "Connects interfaces to backend resources.",
    "GET /items|API|200 JSON",
    "Gravity backend",
    "flow"
  ],
  [
    "Microservices",
    "MS",
    "backend",
    "Gateway \u2192 service \u2192 response",
    "Splits backend responsibilities across services.",
    "gateway|service A|service B",
    "Gravity backend",
    "branch"
  ],
  [
    "Socket.IO",
    "IO",
    "backend",
    "Emit \u2194 listen",
    "Moves events between connected clients and a server.",
    "client A|server|client B",
    "Real-time systems",
    "sync"
  ],
  [
    "JWT",
    "JWT",
    "backend",
    "Token \u2192 verify \u2192 access",
    "Carries signed claims for authentication flows.",
    "token|verify|access",
    "Backend toolkit",
    "check"
  ],
  [
    "MongoDB",
    "MDB",
    "data",
    "Query \u2192 documents",
    "Stores and retrieves document-shaped application data.",
    "query|collection|document",
    "MERN data layer",
    "query"
  ],
  [
    "Mongoose",
    "MG",
    "data",
    "Schema \u2192 validate \u2192 document",
    "Models and validates MongoDB documents in Node.js.",
    "schema|validate|document",
    "Backend data toolkit",
    "check"
  ],
  [
    "MySQL",
    "MY",
    "data",
    "Query \u2192 table \u2192 rows",
    "Stores structured records in relational tables.",
    "query|table|rows",
    "Database toolkit",
    "query"
  ],
  [
    "Firebase",
    "FB",
    "data",
    "Write \u2192 sync \u2192 clients",
    "Provides cloud data services for app workflows.",
    "write|cloud data|sync",
    "ReGeo",
    "sync"
  ],
  [
    "Google Maps API",
    "MAP",
    "data",
    "Coordinates \u2192 boundary \u2192 check",
    "Connects map coordinates to geofencing checks.",
    "point|boundary|check",
    "ReGeo",
    "check"
  ],
  [
    "AWS",
    "AWS",
    "cloud",
    "Request \u2192 services \u2192 response",
    "Hosts and connects cloud application services.",
    "EC2|S3|ELB",
    "Gravity / EduBridge",
    "branch"
  ],
  [
    "Render",
    "RD",
    "cloud",
    "Commit \u2192 build \u2192 deploy",
    "Deploys web applications from a build workflow.",
    "commit|build|deploy",
    "Deployment toolkit",
    "build"
  ],
  [
    "Vercel",
    "VC",
    "cloud",
    "Commit \u2192 preview \u2192 deploy",
    "Publishes frontend applications and previews.",
    "commit|preview|deploy",
    "HennaByFuzz",
    "build"
  ],
  [
    "Docker",
    "DK",
    "devtools",
    "Layers \u2192 image \u2192 container",
    "Packages an application and its runtime together.",
    "layers|image|container",
    "DevOps toolkit",
    "package"
  ],
  [
    "CI/CD",
    "CI",
    "devtools",
    "Build \u2192 test \u2192 deploy",
    "Automates checks and delivery steps.",
    "build|test|deploy",
    "Delivery workflow",
    "check"
  ],
  [
    "Playwright",
    "PW",
    "devtools",
    "Open \u2192 interact \u2192 assert",
    "Tests browser behavior with repeatable interactions.",
    "page|click|assert",
    "Testing toolkit",
    "check"
  ],
  [
    "Git",
    "GIT",
    "devtools",
    "Branch \u2192 commit \u2192 merge",
    "Tracks changes and combines branches of work.",
    "branch|commit|merge",
    "Version control",
    "branch"
  ],
  [
    "GitHub",
    "GH",
    "devtools",
    "Branch \u2192 review \u2192 merge",
    "Hosts code and collaboration around changes.",
    "branch|pull request|merge",
    "Moneymatter PR #890",
    "branch"
  ],
  [
    "Postman",
    "POST",
    "devtools",
    "Request \u2192 API \u2192 response",
    "Explores and tests API request/response behavior.",
    "request|endpoint|response",
    "API workflow",
    "flow"
  ],
  [
    "VS Code",
    "VSC",
    "devtools",
    "Edit \u2192 run \u2192 inspect",
    "An editor for writing and inspecting code.",
    "edit|run|inspect",
    "Developer toolkit",
    "build"
  ],
  [
    "Claude Code",
    "CC",
    "assist",
    "Prompt \u2192 proposed diff \u2192 review",
    "Assists coding work. Changes still need developer review.",
    "prompt|diff|review",
    "AI-assisted workflow",
    "review"
  ],
  [
    "GitHub Copilot",
    "CP",
    "assist",
    "Context \u2192 suggestion \u2192 review",
    "Suggests code within a developer workflow.",
    "context|suggestion|review",
    "AI-assisted workflow",
    "review"
  ],
  [
    "Antigravity",
    "AG",
    "assist",
    "Task \u2192 proposal \u2192 review",
    "An AI development tool listed in the retained resume.",
    "task|proposal|review",
    "AI-assisted workflow",
    "review"
  ],
  [
    "CodeRabbit",
    "CR",
    "assist",
    "Diff \u2192 comments \u2192 review",
    "Assists code review through proposed feedback.",
    "diff|comments|review",
    "AI-assisted workflow",
    "review"
  ],
  [
    "Python",
    "PY",
    "applied",
    "Input \u2192 model \u2192 output",
    "Used for image classification and automation work.",
    "image|model|class",
    "Retech Solutions",
    "flow"
  ],
  [
    "MediaPipe",
    "MP",
    "applied",
    "Frame \u2192 landmarks \u2192 gesture",
    "Extracts landmarks that can support gesture-based interaction.",
    "frame|landmarks|gesture",
    "EduBridge description",
    "check"
  ],
  [
    "WebRTC",
    "RTC",
    "applied",
    "Peer \u2192 connection \u2192 stream",
    "Connects browsers for real-time media or data.",
    "peer A|connection|peer B",
    "EduBridge description",
    "sync"
  ],
  [
    "Web APIs",
    "WEB",
    "applied",
    "Event \u2192 browser \u2192 action",
    "Uses native browser capabilities for multimodal input.",
    "event|browser|action",
    "EduBridge description",
    "flow"
  ],
  [
    "PyWhatKit",
    "PWK",
    "applied",
    "Input \u2192 automation \u2192 result",
    "Supports automation work from Python.",
    "input|automation|result",
    "Retech Solutions",
    "flow"
  ]
];
(()=>{
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];let selected=3,runTimer=0,autoTimer=0,autoStep=0;
 function chooseTool(index,scroll=false){selected=index;clearTimeout(runTimer);const t=portfolioTools[index];$$('[data-tool]').forEach(b=>{const on=+b.dataset.tool===index;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});$('#tool-name').textContent=t[0];$('#tool-description').textContent=t[4];$('#tool-context').textContent=t[6];$('#tool-operation').textContent=t[3];$('#tool-index').textContent=String(index+1).padStart(2,'0')+' / '+portfolioTools.length;$('.tool-stage').dataset.pattern=t[7];$('.tool-stage').classList.remove('is-running');t[5].split('|').forEach((label,i)=>$('.machine-unit.u'+(i+1)+' span').textContent=label);$('.tool-run-status').textContent='Conceptual operation. Select Run to step through '+t[0]+'.';$('#run-tool').disabled=false;if(scroll)$('.tool-detail').style.scrollMarginTop='20px';if(scroll)$('.tool-detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});}
 document.addEventListener('click',e=>{const tile=e.target.closest('[data-tool]');if(tile)chooseTool(+tile.dataset.tool,true);const filter=e.target.closest('[data-tool-filter]');if(filter){$$('[data-tool-filter]').forEach(b=>{const on=b===filter;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});const cat=filter.dataset.toolFilter;$('.tool-inventory').classList.toggle('is-filtered',cat!=='all');$$('[data-tool]').forEach(b=>b.hidden=cat!=='all'&&b.dataset.category!==cat);const first=$$('[data-tool]').find(b=>!b.hidden);if(first)chooseTool(+first.dataset.tool);}
 const evidence=e.target.closest('[data-evidence]');if(evidence){const names=['regeo-award.webp','edubridge-award.webp','regeo-prize.webp'],captions=["Innothon '24 / Team Tech X / Second prize",'EduBridge / Imp-act-athon / First prize',"Innothon '24 / Team Tech X / Prize cheque"],alts=['Original Innothon 24 team award poster','Original Imp-act-athon team photo with first prize cheque and trophy','Original Innothon 24 second prize cheque'];const i=+evidence.dataset.evidence;$('.archive-photo img').src=window.PortfolioPhotos?.[names[i]]||names[i];$('.archive-photo img').alt=alts[i];$('#archive-caption').textContent=captions[i];$$('[data-evidence]').forEach(b=>{const on=b===evidence;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});}
 });
 $('#run-tool').addEventListener('click',()=>{clearTimeout(runTimer);const t=portfolioTools[selected],steps=t[5].split('|'),reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;let i=0;$('#run-tool').disabled=true;$('.tool-stage').classList.add('is-running');function next(){const text=t[1]+': '+steps.slice(0,i+1).join(' → ');$('.tool-run-status').textContent=text+(i===2?(t[7]==='review'?' / awaiting developer review.':' / conceptual flow complete.'):' …');i++;if(i<3)runTimer=setTimeout(next,reduced?100:1000);else{runTimer=setTimeout(()=>{$('#run-tool').disabled=false;$('.tool-stage').classList.remove('is-running');},reduced?100:700);}}next();});chooseTool(3);
 // The idle About animation now walks a real conceptual request, not a logo orbit.
 const layers=[['The interface.','Responsive React interfaces turn an idea into something people can use.'],['The logic.','Node.js APIs handle application rules, services and real-time features.'],['The data.','MongoDB queries turn stored application records into useful responses.'],['The deployment.','AWS hosts the application so the response can reach its visitor.']];
 function autoRequest(){const lab=$('.stack-lab');const bounds=lab.getBoundingClientRect();if(document.hidden||document.body.classList.contains('is-page-paused')||lab.dataset.tracing==='true'||bounds.bottom<0||bounds.top>innerHeight)return;$$('[data-layer]').forEach(el=>{const on=+el.dataset.layer===autoStep;el.classList.toggle('selected',on);el.setAttribute('aria-pressed',String(on));});$('#layer-name').textContent=layers[autoStep][0];$('#layer-copy').textContent=layers[autoStep][1];lab.dataset.step=autoStep;lab.querySelector('.lab-top>span:last-child').textContent='0'+(autoStep+1)+' / 04';$('#flow-output').textContent=['1 / Visitor interaction reaches the React interface.','2 / The Node.js API processes the request.','3 / The app reads or writes a MongoDB document.','4 / AWS delivers the application response.'][autoStep];autoStep=(autoStep+1)%4;}
 const resetAuto=()=>{clearInterval(autoTimer);autoTimer=setInterval(autoRequest,3200);};if(!matchMedia('(prefers-reduced-motion:reduce)').matches)resetAuto();
 document.addEventListener('click',e=>{if(e.target.closest('[data-layer],.send-packet')){clearInterval(autoTimer);$('.stack-lab').dataset.tracing='true';setTimeout(()=>{$('.stack-lab').dataset.tracing='false';if(!matchMedia('(prefers-reduced-motion:reduce)').matches)resetAuto();},7000);}});
})();
