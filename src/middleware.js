import { NextResponse } from 'next/server'
const maintenance = process.env.NEXT_PUBLIC_MAINTENANCE

export function middleware(req){
    const onMaintenance = maintenance > 0
    const urlRaw = req.url.split('http://').join('').split('/')
    urlRaw.shift()
    const url = urlRaw.join('/')
    const response = NextResponse.next()
    
    if(onMaintenance && url !== 'maintenance'){
        return NextResponse.redirect(new URL('/maintenance', req.url))
    }
}


export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)"
}