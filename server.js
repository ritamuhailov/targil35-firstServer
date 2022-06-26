import * as fs from "fs/promises";
import * as http from "http";


http
    .createServer((request, response) => {

        fs.readFile(`./en.txt`).then((en) => {

            fs.readFile(`./translation.json`, "utf8")
                .then((json) => {
                    //console.log(json);
                    const array = JSON.parse(json);
                    //console.log(array);
                    for (let i = 0; i < array.length - 1; i++) {
                        // if (en === array[i].welcome) {
                        // const obj = array[i];
                        if (array[i][en]) {
                            fs.writeFile("./he.txt", array[i][en]);

                        }
                    }
                });
        })

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Yes!");
    }).listen(8000);
