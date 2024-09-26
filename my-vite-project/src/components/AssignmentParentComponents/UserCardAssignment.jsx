import React, { useState } from 'react'
import { NameTagContainer3Columns } from '../NameTagContainer3Columns'

export const UserCardAssignment = () => {
    const [data, setData] = useState([
        {
            "page": 2,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
            "data": [
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                    "avatar": "https://reqres.in/img/faces/7-image.jpg",
                    "comments": "Best From Software game Music is an orchestra Gameplay makes your heart accelerate Beautifully made graphics"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg",
                    "comments": "Probably my favourite game. Everything is perfect. Took a while to get into it but when it did, absolutely incredible."
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg",
                    "comments": "Amazing game and a genuine challenge. My Soullike favorite. I will visit this game so many time more"
                },
                {
                    "id": 10,
                    "email": "byron.fields@reqres.in",
                    "first_name": "Byron",
                    "last_name": "Fields",
                    "avatar": "https://reqres.in/img/faces/10-image.jpg",
                    "comments": "it's a good game, ahahahahahahahahaha"
                },
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg",
                    "comments": "Why is this game so hard ?"
                },
                {
                    "id": 12,
                    "email": "rachel.howell@reqres.in",
                    "first_name": "Rachel",
                    "last_name": "Howell",
                    "avatar": "https://reqres.in/img/faces/12-image.jpg",
                    "comments": " the music is 10/10 "
                }
            ],
            "support": {
                "url": "https://reqres.in/#support-heading",
                "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
            }
        }
    ])
  return (
    <NameTagContainer3Columns data={data['0'].data}></NameTagContainer3Columns>
  )
}
