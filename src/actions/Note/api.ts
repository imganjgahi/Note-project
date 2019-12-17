 import { urlGeneral, urlVersion } from "../../Utils/General/GConst"
import axios from 'axios'
import { CreateNoteType } from "./model"
const NoteUrl = urlGeneral + urlVersion + "/notes/"

export const NoteApi = {
    
    GetNotes : async () => {
        return axios.get(NoteUrl)
    },


    CreateNote : async (data: CreateNoteType) => {
        return axios.post(NoteUrl, data)
    },

    DeleteNote : async (id: string) => {
        return axios.delete(NoteUrl + id)
    }
}