 import { urlGeneral, urlVersion } from "../../Utils/General/GConst"
import axios from 'axios'
import { CreateNoteType } from "./model"
const NoteUrl = urlGeneral + urlVersion + "/notes/"

export const NoteApi = {
    CreateNote : async (data: CreateNoteType) => {
        return axios.post(NoteUrl, data)
    }
}