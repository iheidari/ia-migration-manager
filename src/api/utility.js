import { Get } from './call';
import * as Api from './mock';

const baseUrl = 'http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/';
const mode='mock';//api

export const GetChangesetById = (id) => {
    if(mode==='mock') return Api.GetChangesetById(id);

    const url = `${baseUrl}_apis/tfvc/changesets/${id}?api-version=1.0`;
    return Get(url);
}

export const GetChangesetDetailById = (id) => {
    if(mode==='mock') return Api.GetChangesetDetailById(id);

    const url = `${baseUrl}_apis/tfvc/changesets/${id}?api-version=1.0&includeDetails=true`;
    return Get(url);
}

export const GetChangesetWorkItemsById = (id) => {
    if(mode==='mock') return Api.GetChangesetWorkItemsById(id);

    const url = `${baseUrl}_apis/tfvc/changesets/${id}/workitems?api-version=1.0`;
    return Get(url);
}
