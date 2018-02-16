import { Get } from './call';

const baseUrl = 'http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/';

export const GetChangesetById = (id) => {    
    const url = `${baseUrl}_apis/tfvc/changesets/${id}?api-version=1.0`;
    return Get(url);
}

export const GetChangesetDetailById = (id) => {
    const url = `${baseUrl}_apis/tfvc/changesets/${id}?api-version=1.0&includeDetails=true`;
    return Get(url);
}

export const GetChangesetWorkItemsById = (id) => {
    const url = `${baseUrl}_apis/tfvc/changesets/${id}/workitems?api-version=1.0`;
    return Get(url);
}
