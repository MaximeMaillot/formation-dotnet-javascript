import fs from "fs"

export function getJSON(filePath) {
    let dataJSON = fs.readFileSync(filePath, (err, data) => {
        if (err == null) {
            console.log("data", data)
            return data;
        }
        else {
            console.log("err", err)
            return err
        }
    });
    return dataJSON;
};