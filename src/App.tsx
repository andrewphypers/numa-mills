const A = '/assets/'
const phone = 'tel:2509772402'

function Logo() {
  return <a href="#home" className="logo" aria-label="Numa Millworks home"><img src="/numa-logo.png" alt="Numa" /></a>
}

function CallButton({ children = 'Call 250-977-2402', arrow = 'de451.svg' }: { children?: React.ReactNode, arrow?: string }) {
  return <a className="button" href={phone}>{children}<img src={`${A}${arrow}`} alt="" /></a>
}

function Header() {
  return <header><Logo/><nav><a href="#home">Home</a><a href="#home-services">Services</a><a href="#small-jobs">Small Jobs</a><a href="#home-projects">Projects</a><a href="#home-about">About</a></nav><CallButton/></header>
}

function Label({ children, light = false }: { children: React.ReactNode, light?: boolean }) {
  return <div className={`label ${light ? 'light' : ''}`}><i />{children}</div>
}

function Strip({ items }: { items: string[] }) {
  return <div className="strip">{items.map(x => <span key={x}><i />{x}</span>)}</div>
}

type Row = { title: string, text: string }
function Rows({ items, arrow = '78de7.svg' }: { items: Row[], arrow?: string }) {
  return <div className="rows">{items.map((x, i) => <div className="row" key={x.title}><small>0{i + 1}</small><h3>{x.title}</h3><p>{x.text}</p><img src={`${A}${arrow}`} alt="" /></div>)}</div>
}

function Footer({ small = false }: { small?: boolean }) {
  return <section className="contact" id="contact">
    <Label light>{small ? 'LET’S GET TO WORK' : '05 / LET’S GET TO WORK'}</Label>
    <div className="contact-intro"><h2>{small ? <>A SMALL JOB?<br/>GIVE NUMA A CALL.</> : <>YOUR NEXT PROJECT<br/>STARTS HERE.</>}</h2><p>{small ? 'Numa Millworks is a Ktunaxa owned excavation business based in Creston, B.C. Let’s talk about the little job on your list.' : 'Have a site, a plan or a question? Call Numa Millworks to discuss your excavation needs.'}</p></div>
    {small && <div><small className="mono muted">CONTACT</small><h3 className="contact-name">Andrew Phypers</h3></div>}
    <div className="contact-grid"><a className="phone" href={phone}>{!small && <small>ANDREW PHYPERS</small>}250-977-2402 <img src={`${A}${small ? 'dd7fe.svg' : 'd38d1.svg'}`} alt="" /></a><div><small className="mono muted">BASED IN CRESTON</small><p>3555 Riverview Road,<br/>Creston B.C., V0B1G2</p></div></div>
    <div className="footer"><a href="#home" aria-label="Numa Millworks home"><img className="footer-logo" src="/numa-logo.png" alt="Numa" /></a><nav><a href="#home">Home</a><a href="#home-services">Services</a><a href="#small-jobs">Small Jobs</a><a href="#home-projects">Projects</a><a href="#home-about">About</a></nav><small>KTUNAXA OWNED. KOOTENAY BASED.</small></div>
  </section>
}

const services: Row[] = [
  { title: 'Civil excavation', text: 'From site preparation to the groundwork for new infrastructure. A capable partner for your next civil project.' },
  { title: 'Earth moving', text: 'Shaping the site to suit the plan. Excavation and earth moving for projects large and small.' },
  { title: 'Road building', text: 'Connecting land to what comes next. Road building with attention to the terrain and drainage.' },
  { title: 'Residential excavation', text: 'Getting your property ready for its next chapter. Groundwork for homes and residential development.' },
]

function Home() {
  return <main id="home"><Header/>
    <section className="hero home-hero">
      <div className="hero-content"><Label light>KTUNAXA OWNED. KOOTENAY BASED.</Label><h1>GROUNDWORK.<br/>BUILT FOR HERE.</h1><p>Civil excavation, earth moving and road building. Moving your project forward in the Kootenays.</p><CallButton>Let’s talk about your project</CallButton></div>
      <div className="hero-foot"><span>CRESTON, BRITISH COLUMBIA</span><span>EXPLORE OUR CAPABILITIES ↓</span></div>
    </section>
    <Strip items={['CIVIL EXCAVATION','EARTH MOVING','ROAD BUILDING','RESIDENTIAL EXCAVATION']}/>
    <section className="section" id="home-services"><div className="section-head"><Label>01 / WHAT WE DO</Label><div><h2>THE RIGHT START.<br/>FROM THE GROUND UP.</h2><p>Every project starts with the land. Numa Millworks brings the equipment and excavation capability to take on work across the Kootenays, from residential sites to civil earthworks.</p></div></div><Rows items={services}/></section>
    <section className="split dark"><div className="photo equipment-photo"><span>PURPOSE-BUILT CAPABILITY</span></div><div className="split-copy"><Label light>02 / THE EQUIPMENT</Label><div><h2>BIG CAPABILITY.<br/>THE RIGHT FIT.</h2><p>With excavators ranging from 5 tonne to 40 tonne, Numa can handle any job. From work on a residential property to large-scale earth moving, we match the machine to the work.</p></div><div className="range"><b>5–40</b><small>TONNE EXCAVATORS</small></div><CallButton>Find the right fit · 250-977-2402</CallButton></div></section>
    <section className="section" id="home-projects"><Label>03 / WORK ON THE GROUND</Label><div className="wide-head"><h2>DIFFERENT PROJECTS.<br/>THE SAME COMMITMENT.</h2><p>From developing land to restoring it, a look at the work Numa has completed.</p></div><div className="projects">
      <article><img src={`${A}882d9.png`} alt="A winding road through a developed landscape"/><small>LAND DEVELOPMENT</small><h3>Making way for what’s next.</h3><p>A property subdivision brought together road design, drainage planning and surveying — laying the groundwork for the next stage of development.</p><footer>ROAD DESIGN / DRAINAGE PLANNING / SURVEYING</footer></article>
      <article><img src={`${A}1ab99.png`} alt="A restored wetland in a mountain valley"/><small>WETLANDS RESTORATION</small><h3>A return to natural ground.</h3><p>Restoring agricultural land to a natural wetland state. Earthworks with a different end in mind: making room for water and the landscape to return.</p><footer>AGRICULTURAL LAND / NATURAL WETLAND RESTORATION</footer></article>
    </div></section>
    <section className="section partnership"><Label>04 / PARTNERSHIPS</Label><div><div><h2>WE WANT PARTNERS.<br/>SEE WHAT A STRATEGIC PARTNERSHIP CAN ACCOMPLISH.</h2><p>We invite businesses across the wider Kootenay community to explore strategic partnerships with Numa Millworks. From shared project opportunities to long-term collaboration, we are open to conversations that can help build stronger outcomes together.</p></div><aside><h3>Interested in exploring a partnership?</h3><p>Connect with Andrew Phypers to discuss how a partnership could support your business goals and project plans.</p><CallButton>Talk to Andrew · 250-977-2402</CallButton></aside></div></section>
    <section className="about" id="home-about"><div><Label>04 / WHO WE ARE</Label><h2>ROOTED HERE.<br/>READY TO WORK.</h2><h4>Numa Millworks is a Ktunaxa owned business operating in the Kootenays in British Columbia.</h4><p>Based in Creston, we take on civil excavation, earth moving, road building and residential excavation. Tell us what you have planned. We’re ready to talk through the groundwork.</p><small>CRESTON / THE KOOTENAYS / BRITISH COLUMBIA</small></div><figure><img src={`${A}03b00.png`} alt="The Kootenay valley"/><figcaption>THE PLACE WE CALL HOME <span>KOOTENAYS, BC</span></figcaption></figure></section>
    <Footer/>
    <SmallJobs/>
  </main>
}

const smallJobs: Row[] = [
  { title: 'Trenching', text: 'Need a trench dug on your property? Talk to us about the route, access and excavation your project needs.' },
  { title: 'Small earthworks', text: 'Moving soil and shaping a smaller area. Groundwork for the changes you have planned around your property.' },
  { title: 'Residential groundwork', text: 'From a small dig to preparing part of your site, we’ll talk through the scope and match the machine to the work.' },
]

function SmallJobs() {
  return <div id="small-jobs">
    <section className="hero small-hero"><div className="hero-content"><small>SERVICES / SMALL JOBS</small><Label light>SMALL EXCAVATION. SAME COMMITMENT.</Label><h1>WE HAVE THE<br/>LITTLE STUFF<br/>COVERED TOO</h1><p>A trench, a little earth moving, a project around the property. Numa brings the right equipment to the small jobs, too.</p><CallButton arrow="f60cb.svg">Let’s talk about your small job</CallButton></div><div className="hero-foot"><span>CRESTON, B.C. / SERVING THE KOOTENAYS</span><span>A LITTLE GROUNDWORK ↓</span></div></section>
    <Strip items={['TRENCHING','SMALL EARTHWORKS','RESIDENTIAL EXCAVATION']}/>
    <section className="section"><div className="section-head"><Label>01 / A LITTLE GROUNDWORK</Label><div><h2>SMALL JOB.<br/>WORTH DOING RIGHT.</h2><p>You don’t need a large development to call Numa. We take on smaller excavation and earth moving jobs for properties in Creston and across the Kootenays.</p></div></div><Rows items={smallJobs} arrow="a32a0.svg"/></section>
    <section className="split dark"><div className="photo small-equipment"><span>THE RIGHT MACHINE FOR THE WORK</span></div><div className="split-copy"><Label light>02 / THE RIGHT FIT</Label><div><h2>SMALLER MACHINE.<br/>REAL CAPABILITY.</h2><p>Our excavators range from 5 to 40 tonne. For smaller jobs, we start with the scope, the ground and the available access — then choose the equipment that fits.</p></div><div className="range"><b>5 TONNE</b><small>OUR SMALL END</small></div></div></section>
    <section className="planning"><div className="section-head"><Label>03 / BEFORE WE DIG</Label><h2>TELL US A LITTLE ABOUT THE JOB.</h2></div><div className="plan-grid">
      <article><small>01</small><h3>What are you planning?</h3><p>A trench, some soil to move or a small area to prepare. Tell us what you want the groundwork to achieve.</p></article>
      <article><small>02</small><h3>Where is the work?</h3><p>Let us know your location in the Kootenays and what access is like around the property.</p></article>
      <article><small>03</small><h3>What’s your timing?</h3><p>Share when you’re hoping to get started. We can discuss the scope, equipment and next steps together.</p></article>
    </div></section>
    <Footer small/>
  </div>
}

export default function App() {
  return <Home/>
}
