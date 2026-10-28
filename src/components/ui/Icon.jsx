import React from 'react';
const shapes = {
 leaf: <><path d="M20 4c-8-2-15 1-15 8a7 7 0 0 0 7 7c7 0 10-7 8-15Z"/><path d="M4 21 16 9m-6 6V9m3 3h5"/></>,
 kidney: <><path d="M7.5 3C3.8 2.7 2 6.5 2 10.5c0 4.8 2 8 5 8 2.5 0 3.6-2.1 2.5-4.1-.6-1.1-2.5-1.6-2.5-3.4s1.9-2.3 2.5-3.4C10.5 5.6 9.7 3.2 7.5 3Z"/><path d="M16.5 3c3.7-.3 5.5 3.5 5.5 7.5 0 4.8-2 8-5 8-2.5 0-3.6-2.1-2.5-4.1.6-1.1 2.5-1.6 2.5-3.4s-1.9-2.3-2.5-3.4c-1-2-.2-4.4 2-4.6ZM7 11c5 0 4 6 4 10m6-10c-5 0-4 6-4 10"/></>,
 shield: <><path d="m12 3 8 3v6c0 4.8-5 7.9-8 9-3-1.1-8-4.2-8-9V6l8-3Z"/><path d="m8 12 2.7 2.7L16 9"/></>,
 flask: <><path d="M9 3h6m-5 0v7L4.8 19a1.3 1.3 0 0 0 1.1 2h12.2a1.3 1.3 0 0 0 1.1-2L14 10V3M8 15h8"/><circle cx="10" cy="18" r=".6"/><circle cx="13.5" cy="16.5" r=".6"/></>,
 drop: <><path d="M12 3c-2.5 4-7 8.6-7 12a7 7 0 0 0 14 0c0-3.4-4.5-8-7-12Z"/><path d="M8.5 15a3.5 3.5 0 0 0 3.5 3.5"/></>,
 phone: <path d="m7.2 3 2.5 4.4a1 1 0 0 1-.2 1.2L8 10.1a14 14 0 0 0 5.9 5.9l1.5-1.5a1 1 0 0 1 1.2-.2l4.4 2.5a1 1 0 0 1 .5 1.1l-.7 3a1 1 0 0 1-1 .8C10 21.7 2.3 14 2.3 4.2a1 1 0 0 1 .8-1l3-.7a1 1 0 0 1 1.1.5Z"/>,
 chat: <><path d="M20.5 11.5a9 9 0 0 1-13.1 8L3 21l1.4-4.5a9 9 0 1 1 16.1-5Z"/><path d="m8.2 7.5 1.7 2.7-1 1c.8 1.8 2.1 3 3.9 3.8l1-1 2.7 1.6c-1.2 3.4-5.4 1.3-7.6-.9-2.2-2.1-4.2-6.2-.7-7.2Z"/></>,
 truck: <><path d="M3 6h11v11H3V6Zm11 4h4l3 4v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M2 10h5m-5 3h3"/></>,
 check: <path d="m5 12 4 4L19 6"/>,
 play: <path d="m9 5 10 7-10 7V5Z"/>,
 lock: <><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
 menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
 arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
 plus: <path d="M5 12h14M12 5v14"/>,
 star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>,
 sprout: <><path d="M12 21v-9M12 14C5 15 2 11 3 6c6-1 9 2 9 8Zm0-4c0-5 3-8 9-7 1 6-2 9-9 9"/></>,
 stomach: <path d="M10 3v5c0 3-5 1-6 5-1 5 3 8 7 8 6 0 10-4 10-9 0-3-2-5-5-4-2 1-2-3-2-5m-7 14c1 2 4 2 6 0"/>,
 clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
 wallet: <><rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 8h18m0 4h-6v5h6"/><circle cx="17.5" cy="14.5" r=".5"/></>
};
export default function Icon({name='leaf',className=''}) {
 return <svg className={`icon icon-${name} ${className}`} viewBox="0 0 24 24" fill={name==='star'||name==='play'?'currentColor':'none'} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{shapes[name]||shapes.leaf}</svg>;
}
