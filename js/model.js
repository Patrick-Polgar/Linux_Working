/* model (Daten) */

let data = {
    milk: { lower: 0, upper: 5, bev: "Milch", arr: ["milch"] },
    juice: { lower: 6, upper: 13, bev: "Saft", arr: ["milch", "saft"] },
    cola: { lower: 14, upper: 17, bev: "Cola", arr: ["milch", "saft", "cola"] },
    bier: { lower: 18, upper: 80, bev: "Bier", arr: ["milch", "saft", "cola", "bier", "wein"] },
    wine: { lower: 18, upper: 80, bev: "Wein", arr: ["milch", "saft", "cola", "bier", "wein"] },
    tea: { lower: 80, upper: 999, bev: "Tee", arr: ["tee"] },
}

let gui =   {
                img:{   path:"./bilder/" , ext: ".jpg" },
                dom:{   btn: document.getElementById("trigBtn"),
                        field: document.getElementsByName("eingabe")[0],
                        txt: document.getElementById("outputTxt")
                }
            }