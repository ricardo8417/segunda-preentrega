import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
//Consulto a mis productos de mi Base de datos y se los envio a ItemList
const BDD =[  
     {
  "id": 1,
        "idCategoria": 1,
        "nombre": "all in one",
        "marca": "HP",
        "modelo": "22-dd0520la",
        "precio": 11995,
        "stock": 40,
        "img": "img/allinoneHP.jpg"

},
   {
  "id": 2,
        "idCategoria": 4,
        "nombre": "Archicad",
        "marca": "Graphisoft",
        "version": "23",
        "precio": 3474,
        "stock": 20,
        "img": "img/archicad.jpg"

},
  {
  "id": 3,
        "idCategoria": 4,
        "nombre": "Autocad",
        "marca": "Autodesk",
        "version": "2023",
        "precio": 26213,
        "stock": 30,
        "img": "img/autocad.jpg"

},
{
  "id": 4,
        "idCategoria": 2,
        "nombre": "camara",
        "marca": "Dahua",
        "modelo": "DH-HAC-T2A21",
        "precio": 1950,
        "stock": 28,
        "img": "img/dahua.jpg"

},
{
  "id": 5,
        "idCategoria": 1,
        "nombre": "computadora",
        "marca": "Dell",
        "modelo": "Optiplex 7040",
        "precio": 6200,
        "stock": 35,
        "img": "img/dell.jpg"

},
{
  "id": 6,
        "idCategoria": 3,
        "nombre": "Disco Duro SSD512GB",
        "marca": "Adata",
        "modelo": "SU800",
        "precio": 839,
        "stock": 50,
        "img": "img/discoadata.jpg"

},

{
  "id": 7,
        "idCategoria": 3,
        "nombre": "Disco Duro Externo 2TB",
        "marca": "Adata",
        "modelo": "HD710P",
        "precio": 1329,
        "stock": 10,
        "img": "img/discoduroexterno.jpg"

},
{
  "id": 8,
        "idCategoria": 2,
        "nombre": "camara",
        "marca": "Hikvision",
        "modelo": "DS-2CD2143G2-I(S)",
        "precio": 2519,
        "stock": 5,
        "img": "img/domohikvision.jpg"

},
{
  "id": 9,
        "idCategoria": 2,
        "nombre": "camara",
        "marca": "Hikvision",
        "modelo": "DS2CE17D0TIT5FC",
        "precio": 669,
        "stock": 6,
        "img": "img/hikvision.jpg"

},

{
  "id": 10,
        "idCategoria": 3,
        "nombre": "Disco Duro SSD 960GB",
        "marca": "Kingston",
        "modelo": "A400",
        "precio": 839,
        "stock": 8,
        "img": "img/kingstonssd.jpg"

},
{
  "id": 11,
        "idCategoria": 3,
        "nombre": "Disco Duro SSD 960GB",
        "marca": "Kingston",
        "modelo": "XVR1B04H-I y 4x B2A51",
        "precio": 3900,
        "stock": 4,
        "img": "img/kitdahua.jpg"

},
{
  "id": 12,
        "idCategoria": 1,
        "nombre": "all in one",
        "marca": "Lenovo",
        "modelo": "A340-24IGM",
        "precio": 8400,
        "stock": 5,
        "img": "img/lenovo.jpg"

},
{
  "id": 13,
        "idCategoria": 1,
        "nombre": "all in one",
        "marca": "Mac",
        "modelo": "MK442LL",
        "precio": 11000,
        "stock": 7,
        "img": "img/mac.jpg"

},
{
  "id": 14,
        "idCategoria": 3,
        "nombre": "Disco Duro 1TB",
        "marca": "WD",
        "modelo": "WD10EZEX",
        "precio": 743,
        "stock": 12,
        "img": "img/western.jpg"

},
{
  "id": 15,
        "idCategoria": 4,
        "nombre": "Office Profesional Plus",
        "marca": "Microsoft",
        "version": "2021",
        "precio": 546,
        "stock": 25,
        "img": "img/microsoftoffice.jpg"

},
{
  "id": 16,
        "idCategoria": 4,
        "nombre": "Opus",
        "marca": "Ecosoft",
        "version": "2022",
        "precio": 7200,
        "stock": 30,
        "img": "img/opus.jpg"

}
]

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])



  
  useEffect(() => {
    fetch('./Data/productos.json')
      .then(response => response.json())
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)

      })

  }, [])

  return (
    <div className="row">
      {<ItemList productos={productos} />}
    </div>
  )
}