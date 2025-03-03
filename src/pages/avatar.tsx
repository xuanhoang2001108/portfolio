import Image from 'next/image'
import React from 'react'

function Avatar() {
  return (
    <div className="w-fit rounded-full ring-3 ring-white p-1 mt-11 ">
      <Image
        className="rounded-full aspect-square object-cover"
        height={250}
        width={250}
        src="/avatar.jpegg"
        alt=""
      />
    </div>
  )
}

export default Avatar
