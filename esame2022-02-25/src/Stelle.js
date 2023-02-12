import './Stelle.css'

function Stelle({n}){
    let o = []
    for(let i = 1; i < Number(n)+1; i++){
        let offset = 200 * (i-1)
        o.push(
            <polygon className="stella" key={i} points={(offset+100)+",10 "+(offset+40)+",198 "+(offset+190)+",78 "+(offset+10)+",78 "+(offset+160)+",198"}/>
        )
    }
    return (<svg viewBox="0 0 1000 210">
            {o}
        </svg>
    )
}

export default Stelle