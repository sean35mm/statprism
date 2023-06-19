import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<div className='navbar bg-base-200'>
			<div className='flex-1'>
				<Link
					href={'/'}
					className='btn btn-ghost normal-case text-2xl text-primary font-titillium'
				>
					StatPrism
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<a>News</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
