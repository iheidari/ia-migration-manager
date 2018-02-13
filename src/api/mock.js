/* eslint-disable */
//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?api-version=1.0
export const GetChangesetById = (id) => {
    //return JSON.parse(`{"result":true, "count":42}`);
    return new Promise((resp) => {
        resp(JSON.parse(`{"changesetId": 65184,
        "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184",
        "author": {
            "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "displayName": "Heidari, Iman",
            "uniqueName": "SLIC\IMH",
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
        },
        "checkedInBy": {
            "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "displayName": "Heidari, Iman",
            "uniqueName": "SLIC\IMH",
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
        },
        "createdDate": "2018-02-06T19:26:20.17Z",
        "comment": "47200 Sprint 180 Migration DP",
        "_links": {
            "self": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184"
            },
            "changes": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/changes"
            },
            "workItems": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/workItems"
            },
            "web": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_versionControl/changeset/65184"
            },
            "author": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            },
            "checkedInBy": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            }
        }
    }`));
    }
    );
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?api-version=1.0&includeDetails=true
export const GetChangesetDetailById = (id) => {
    return new Promise((resp) => {
        resp(JSON.parse({
            "checkinNotes": [{
                "name": "Code Reviewer",
                "value": ""
            },
            {
                "name": "Performance Reviewer",
                "value": ""
            },
            {
                "name": "Security Reviewer",
                "value": ""
            }],
            "policyOverride": {
                "policyFailures": []
            },
            "changesetId": 65184,
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184",
            "author": {
                "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
                "displayName": "Heidari, Iman",
                "uniqueName": "SLIC\IMH",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
                "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            },
            "checkedInBy": {
                "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
                "displayName": "Heidari, Iman",
                "uniqueName": "SLIC\IMH",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
                "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            },
            "createdDate": "2018-02-06T19:26:20.17Z",
            "comment": "47200 Sprint 180 Migration DP",
            "_links": {
                "self": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184"
                },
                "changes": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/changes"
                },
                "workItems": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/workItems"
                },
                "web": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_versionControl/changeset/65184"
                },
                "author": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
                },
                "checkedInBy": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
                }
            }
        }))
    }
    );
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?includeWorkItems=true&api-version=1.0&includeDetails=true
export const GetChangesetFullDetailById = (id) => {
    JSON.parse({
        "checkinNotes": [{
            "name": "Code Reviewer",
            "value": ""
        },
        {
            "name": "Performance Reviewer",
            "value": ""
        },
        {
            "name": "Security Reviewer",
            "value": ""
        }],
        "policyOverride": {
            "policyFailures": []
        },
        "workItems": [{
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47200",
            "id": 47200,
            "title": "UniFi PROD Migration - planned for 7 Feb 2018",
            "workItemType": "Requirement",
            "state": "Active",
            "assignedTo": "Heidari, Iman <SLIC\IMH>"
        },
        {
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47260",
            "id": 47260,
            "title": "47200 Sprint 180 Migration DP_Unifi_New",
            "workItemType": "Promotion Request",
            "state": "Approved Request"
        },
        {
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47310",
            "id": 47310,
            "title": "47200 Sprint 180 Migration DP_Unifi_New",
            "workItemType": "Promotion Request",
            "state": "Ready to be Deployed"
        }],
        "changesetId": 65184,
        "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184",
        "author": {
            "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "displayName": "Heidari, Iman",
            "uniqueName": "SLIC\IMH",
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
        },
        "checkedInBy": {
            "id": "d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "displayName": "Heidari, Iman",
            "uniqueName": "SLIC\IMH",
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799",
            "imageUrl": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_api/_common/identityImage?id=d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
        },
        "createdDate": "2018-02-06T19:26:20.17Z",
        "comment": "47200 Sprint 180 Migration DP",
        "_links": {
            "self": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184"
            },
            "changes": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/changes"
            },
            "workItems": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/workItems"
            },
            "web": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_versionControl/changeset/65184"
            },
            "author": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            },
            "checkedInBy": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/Identities/d3760f5c-5a35-4ef5-a1f3-37ca3da1c799"
            }
        }
    });
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/workitems?api-version=1.0
export const GetChangesetWorkItemsById = (id) => {
    JSON.parse({
        "count": 3,
        "value": [{
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47200",
            "id": 47200,
            "title": "UniFi PROD Migration - planned for 7 Feb 2018",
            "workItemType": "Requirement",
            "state": "Active",
            "assignedTo": "Heidari, Iman <SLIC\IMH>"
        },
        {
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47260",
            "id": 47260,
            "title": "47200 Sprint 180 Migration DP_Unifi_New",
            "workItemType": "Promotion Request",
            "state": "Approved Request"
        },
        {
            "webUrl": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47310",
            "id": 47310,
            "title": "47200 Sprint 180 Migration DP_Unifi_New",
            "workItemType": "Promotion Request",
            "state": "Ready to be Deployed"
        }]
    });
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workitems?ids=47200,44074&$expand=all&api-version=1.0
export const GetWorkItamDetailsByIds = (ids) => {
    JSON.parse({
        "count": 2,
        "value": [{
            "id": 47200,
            "rev": 8,
            "fields": {
                "System.Id": 47200,
                "System.AreaId": 287,
                "System.AreaPath": "DP_Unifi_NEW\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.NodeName": "Freedom_Team",
                "System.AreaLevel1": "DP_Unifi_NEW",
                "System.AreaLevel2": "Freedom_Team",
                "System.Rev": 8,
                "System.AuthorizedDate": "2018-02-06T21:56:37.93Z",
                "System.RevisedDate": "9999-01-01T00:00:00Z",
                "System.IterationId": 394,
                "System.IterationPath": "DP_Unifi_NEW\Freedom\Sprint 181",
                "System.IterationLevel1": "DP_Unifi_NEW",
                "System.IterationLevel2": "Freedom",
                "System.IterationLevel3": "Sprint 181",
                "System.WorkItemType": "Requirement",
                "System.State": "Active",
                "System.Reason": "Accepted",
                "System.AssignedTo": "Heidari, Iman <SLIC\IMH>",
                "System.CreatedDate": "2018-02-05T23:15:36.73Z",
                "System.CreatedBy": "Fourie, Sonia <SLIC\ASF>",
                "System.ChangedDate": "2018-02-06T21:56:37.93Z",
                "System.ChangedBy": "Heidari, Iman <SLIC\IMH>",
                "System.AuthorizedAs": "Heidari, Iman <SLIC\IMH>",
                "System.PersonId": 76562,
                "System.Watermark": 278886,
                "System.Title": "UniFi PROD Migration - planned for 7 Feb 2018",
                "System.BoardColumn": "ASMB",
                "System.BoardColumnDone": false,
                "Microsoft.VSTS.Common.StateChangeDate": "2018-02-06T20:22:33.31Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2018-02-06T20:22:33.31Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\IMH>",
                "Microsoft.VSTS.Common.StackRank": 999968377.0,
                "Microsoft.VSTS.Common.Priority": 2,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_System.ExtensionMarker": true,
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": false,
                "System.Description": "Create UniFi Migration package for PROD migration."
            },
            "relations": [{
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/e7f30fcf-7bbd-4e8a-a8d9-cb99acc5561a",
                "attributes": {
                    "authorizedDate": "2018-02-06T21:56:37.93Z",
                    "id": 59189,
                    "resourceCreatedDate": "2018-02-06T20:23:49.317Z",
                    "resourceModifiedDate": "2018-02-06T20:23:49.317Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 23397,
                    "name": "Changes.xlsx"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65184",
                "attributes": {
                    "authorizedDate": "2018-02-06T19:26:24.5Z",
                    "id": 59162,
                    "resourceCreatedDate": "2018-02-06T19:26:24.5Z",
                    "resourceModifiedDate": "2018-02-06T19:26:24.5Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47200 Sprint 180 Migration DP",
                    "name": "Fixed in Changeset"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65185",
                "attributes": {
                    "authorizedDate": "2018-02-06T19:27:14.75Z",
                    "id": 59163,
                    "resourceCreatedDate": "2018-02-06T19:27:14.75Z",
                    "resourceModifiedDate": "2018-02-06T19:27:14.75Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47200 Sprint 180 Migration DB",
                    "name": "Fixed in Changeset"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65186",
                "attributes": {
                    "authorizedDate": "2018-02-06T19:31:38.143Z",
                    "id": 59166,
                    "resourceCreatedDate": "2018-02-06T19:31:38.143Z",
                    "resourceModifiedDate": "2018-02-06T19:31:38.143Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47200 Sprint 180 Migration ",
                    "name": "Fixed in Changeset"
                }
            }],
            "_links": {
                "self": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200"
                },
                "workItemUpdates": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/updates"
                },
                "workItemRevisions": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/revisions"
                },
                "workItemHistory": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/history"
                },
                "html": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47200"
                },
                "workItemType": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/75eaeaac-b237-4ee4-a4d9-7af5145cf3d1/_apis/wit/workItemTypes/Requirement"
                },
                "fields": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/fields"
                }
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200"
        },
        {
            "id": 44074,
            "rev": 14,
            "fields": {
                "System.Id": 44074,
                "System.AreaId": 287,
                "System.AreaPath": "DP_Unifi_NEW\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.NodeName": "Freedom_Team",
                "System.AreaLevel1": "DP_Unifi_NEW",
                "System.AreaLevel2": "Freedom_Team",
                "System.Rev": 14,
                "System.AuthorizedDate": "2018-01-08T19:18:46.737Z",
                "System.RevisedDate": "9999-01-01T00:00:00Z",
                "System.IterationId": 392,
                "System.IterationPath": "DP_Unifi_NEW\Freedom\Sprint 179",
                "System.IterationLevel1": "DP_Unifi_NEW",
                "System.IterationLevel2": "Freedom",
                "System.IterationLevel3": "Sprint 179",
                "System.WorkItemType": "Requirement",
                "System.State": "Active",
                "System.Reason": "Accepted",
                "System.AssignedTo": "Heidari, Iman <SLIC\IMH>",
                "System.CreatedDate": "2017-12-15T22:43:53.677Z",
                "System.CreatedBy": "De Bauw, Sophie <SLIC\SDD>",
                "System.ChangedDate": "2018-01-08T19:18:46.737Z",
                "System.ChangedBy": "Heidari, Iman <SLIC\IMH>",
                "System.AuthorizedAs": "Heidari, Iman <SLIC\IMH>",
                "System.PersonId": 76562,
                "System.Watermark": 258479,
                "System.Title": "SF - Create new status: Terminated-Paid and Terminated-Unpaid",
                "System.BoardColumn": "ASMB",
                "System.BoardColumnDone": true,
                "Microsoft.VSTS.Common.StateChangeDate": "2017-12-27T21:48:57.07Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2017-12-27T21:48:57.07Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\IMH>",
                "Microsoft.VSTS.Common.StackRank": 1999996502.0,
                "Microsoft.VSTS.Common.Priority": 2,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Scheduling.Size": 21.0,
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_System.ExtensionMarker": true,
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": true,
                "System.History": "Work suspended to shelveset 44074 SF - Create new status Terminated-Paid and Terminated-U."
            },
            "relations": [{
                "rel": "System.LinkTypes.Hierarchy-Reverse",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/41347",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44500",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44501",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/b5c3dd81-05ba-4003-88eb-54043eae0c21",
                "attributes": {
                    "authorizedDate": "2017-12-18T23:48:30.81Z",
                    "id": 54533,
                    "resourceCreatedDate": "2017-12-18T23:48:25.85Z",
                    "resourceModifiedDate": "2017-12-18T23:48:25.85Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 50688,
                    "name": "44074 - Create new status Terminated-Paid and Terminated-Unpaid.doc"
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/0c75360d-997e-48cd-9fcf-5bd937aa014d",
                "attributes": {
                    "authorizedDate": "2017-12-27T20:58:58.24Z",
                    "id": 56007,
                    "resourceCreatedDate": "2017-12-27T20:58:54.737Z",
                    "resourceModifiedDate": "2017-12-27T20:58:54.737Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 52224,
                    "name": "44074 - Create new status Terminated-Paid and Terminated-Unpaid.doc"
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/2c57ec9e-bbeb-4af8-9a8a-7f1a5a469897",
                "attributes": {
                    "authorizedDate": "2017-12-29T20:15:39.22Z",
                    "id": 56120,
                    "resourceCreatedDate": "2017-12-29T20:15:37.9Z",
                    "resourceModifiedDate": "2017-12-29T20:15:37.9Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 52736,
                    "name": "44074 - Create new status Terminated-Paid and Terminated-Unpaid.doc"
                }
            }],
            "_links": {
                "self": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074"
                },
                "workItemUpdates": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074/updates"
                },
                "workItemRevisions": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074/revisions"
                },
                "workItemHistory": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074/history"
                },
                "html": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=44074"
                },
                "workItemType": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/75eaeaac-b237-4ee4-a4d9-7af5145cf3d1/_apis/wit/workItemTypes/Requirement"
                },
                "fields": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/fields"
                }
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074"
        }]
    });
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workitems/47200?api-version=1.0
export const GetWorkItemById = (id) => {
    JSON.parse({
        "id": 47200,
        "rev": 8,
        "fields": {
            "System.AreaPath": "DP_Unifi_NEW\Freedom_Team",
            "System.TeamProject": "DP_Unifi_NEW",
            "System.IterationPath": "DP_Unifi_NEW\Freedom\Sprint 181",
            "System.WorkItemType": "Requirement",
            "System.State": "Active",
            "System.Reason": "Accepted",
            "System.AssignedTo": "Heidari, Iman <SLIC\IMH>",
            "System.CreatedDate": "2018-02-05T23:15:36.73Z",
            "System.CreatedBy": "Fourie, Sonia <SLIC\ASF>",
            "System.ChangedDate": "2018-02-06T21:56:37.93Z",
            "System.ChangedBy": "Heidari, Iman <SLIC\IMH>",
            "System.Title": "UniFi PROD Migration - planned for 7 Feb 2018",
            "System.BoardColumn": "ASMB",
            "System.BoardColumnDone": false,
            "Microsoft.VSTS.Common.StateChangeDate": "2018-02-06T20:22:33.31Z",
            "Microsoft.VSTS.Common.ActivatedDate": "2018-02-06T20:22:33.31Z",
            "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\IMH>",
            "Microsoft.VSTS.Common.StackRank": 999968377.0,
            "Microsoft.VSTS.Common.Priority": 2,
            "Microsoft.VSTS.Common.Triage": "Pending",
            "Microsoft.VSTS.CMMI.Blocked": "No",
            "Microsoft.VSTS.CMMI.RequirementType": "Functional",
            "Microsoft.VSTS.CMMI.Committed": "No",
            "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
            "Microsoft.VSTS.Common.ValueArea": "Business",
            "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
            "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": false,
            "System.Description": "Create UniFi Migration package for PROD migration."
        },
        "_links": {
            "self": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200"
            },
            "workItemUpdates": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/updates"
            },
            "workItemRevisions": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/revisions"
            },
            "workItemHistory": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200/history"
            },
            "html": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47200"
            },
            "workItemType": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/75eaeaac-b237-4ee4-a4d9-7af5145cf3d1/_apis/wit/workItemTypes/Requirement"
            },
            "fields": {
                "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/fields"
            }
        },
        "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200"
    });
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workitems?ids=47200,44074&api-version=1.0
export const GetWorkItemByIds = (ids) => {
    JSON.parse({
        "count": 2,
        "value": [{
            "id": 47200,
            "rev": 8,
            "fields": {
                "System.AreaPath": "DP_Unifi_NEW\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.IterationPath": "DP_Unifi_NEW\Freedom\Sprint 181",
                "System.WorkItemType": "Requirement",
                "System.State": "Active",
                "System.Reason": "Accepted",
                "System.AssignedTo": "Heidari, Iman <SLIC\IMH>",
                "System.CreatedDate": "2018-02-05T23:15:36.73Z",
                "System.CreatedBy": "Fourie, Sonia <SLIC\ASF>",
                "System.ChangedDate": "2018-02-06T21:56:37.93Z",
                "System.ChangedBy": "Heidari, Iman <SLIC\IMH>",
                "System.Title": "UniFi PROD Migration - planned for 7 Feb 2018",
                "System.BoardColumn": "ASMB",
                "System.BoardColumnDone": false,
                "Microsoft.VSTS.Common.StateChangeDate": "2018-02-06T20:22:33.31Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2018-02-06T20:22:33.31Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\IMH>",
                "Microsoft.VSTS.Common.StackRank": 999968377.0,
                "Microsoft.VSTS.Common.Priority": 2,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": false,
                "System.Description": "Create UniFi Migration package for PROD migration."
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47200"
        },
        {
            "id": 44074,
            "rev": 14,
            "fields": {
                "System.AreaPath": "DP_Unifi_NEW\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.IterationPath": "DP_Unifi_NEW\Freedom\Sprint 179",
                "System.WorkItemType": "Requirement",
                "System.State": "Active",
                "System.Reason": "Accepted",
                "System.AssignedTo": "Heidari, Iman <SLIC\IMH>",
                "System.CreatedDate": "2017-12-15T22:43:53.677Z",
                "System.CreatedBy": "De Bauw, Sophie <SLIC\SDD>",
                "System.ChangedDate": "2018-01-08T19:18:46.737Z",
                "System.ChangedBy": "Heidari, Iman <SLIC\IMH>",
                "System.Title": "SF - Create new status: Terminated-Paid and Terminated-Unpaid",
                "System.BoardColumn": "ASMB",
                "System.BoardColumnDone": true,
                "Microsoft.VSTS.Common.StateChangeDate": "2017-12-27T21:48:57.07Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2017-12-27T21:48:57.07Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\IMH>",
                "Microsoft.VSTS.Common.StackRank": 1999996502.0,
                "Microsoft.VSTS.Common.Priority": 2,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Scheduling.Size": 21.0,
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": true,
                "System.History": "Work suspended to shelveset 44074 SF - Create new status Terminated-Paid and Terminated-U."
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44074"
        }]
    });
}