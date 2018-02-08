import { Get, GetAll } from './call';

const baseUrl = 'http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/';

export const GetChangesetById = (id) => {
    const url = `${baseurl}_apis/tfvc/changesets/${id}?api-version=1.0`;
    return Get(url);
}