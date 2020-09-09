import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)


export default async (req, res) => {
    try {
        //await doc.useServiceAccountAuth(credentials)
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:B2')

        const MostrarPromocaoCell = sheet.getCell(1, 0)

        const textCell = sheet.getCell(1, 1)

        res.end(JSON.stringify({
            showPromo: MostrarPromocaoCell.value === 'VERDADEIRO',
            mensagem: textCell.value
        }))
    } catch (err) {
        res.end(JSON.stringify({
            showPromo: false,
            mensagem: ''
        }))
    }



}