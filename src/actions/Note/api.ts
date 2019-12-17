 import { urlGeneral, urlVersion } from "../../Utils/General/GConst"
import axios from 'axios'
import { CreateNoteModel } from "./model"
const NoteUrl = urlGeneral + urlVersion + "/notes/"

export const NoteApi = {
    CreateNote : async (data: CreateNoteModel) => {
        return axios.post(NoteUrl, data)
    }
}