/* eslint-disable */

const toPromise = (getData) => {
    return new Promise((resp) => {
        resp(getData());
    });
}

export const GetChangesetById = (id) => toPromise((id)=>_GetChangesetById(id));
export const GetChangesetDetailById = (id) => toPromise((id)=>_GetChangesetDetailById(id));
export const GetChangesetWorkItemsById = (id) => toPromise((id)=>_GetChangesetWorkItemsById(id));

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?api-version=1.0
const _GetChangesetById = (id) => {
    return JSON.parse(`{"changesetId": 65184,
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
    }`);
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?api-version=1.0&includeDetails=true
const _GetChangesetDetailById = (id) => {
    return JSON.parse(`{
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
        }`);
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184?includeWorkItems=true&api-version=1.0&includeDetails=true
export const GetChangesetFullDetailById = (id) => {
    JSON.parse(`{
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
    }`);
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/tfvc/changesets/65184/workitems?api-version=1.0
const _GetChangesetWorkItemsById = (id) => {
    return JSON.parse(`{
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
    }`);
}

//http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workitems?ids=45515,47580&$expand=all&api-version=1.0

export const GetWorkItamDetailsByIds = (ids) => {
    return JSON.parse(`{
        "count": 2,
        "value": [{
            "id": 45515,
            "rev": 16,
            "fields": {
                "System.Id": 45515,
                "System.AreaId": 287,
                "System.AreaPath": "DP_Unifi_NEW\\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.NodeName": "Freedom_Team",
                "System.AreaLevel1": "DP_Unifi_NEW",
                "System.AreaLevel2": "Freedom_Team",
                "System.Rev": 16,
                "System.AuthorizedDate": "2018-02-05T23:10:03.023Z",
                "System.RevisedDate": "9999-01-01T00:00:00Z",
                "System.IterationId": 393,
                "System.IterationPath": "DP_Unifi_NEW\\Freedom\\Sprint 180",
                "System.IterationLevel1": "DP_Unifi_NEW",
                "System.IterationLevel2": "Freedom",
                "System.IterationLevel3": "Sprint 180",
                "System.WorkItemType": "Requirement",
                "System.State": "Active",
                "System.Reason": "Accepted",
                "System.AssignedTo": "Heidari, Iman <SLIC\\IMH>",
                "System.CreatedDate": "2018-01-16T23:39:21.517Z",
                "System.CreatedBy": "Wu, Jenny <SLIC\\JCW>",
                "System.ChangedDate": "2018-02-05T23:10:03.023Z",
                "System.ChangedBy": "Wu, Jenny <SLIC\\JCW>",
                "System.AuthorizedAs": "Wu, Jenny <SLIC\\JCW>",
                "System.PersonId": 54097,
                "System.Watermark": 278096,
                "System.Title": "TRX.GAP - Create Cash Deposit to Clear PI Trx - Part IV",
                "System.BoardColumn": "ASMB",
                "System.BoardColumnDone": false,
                "Microsoft.VSTS.Common.StateChangeDate": "2018-02-05T23:10:03.023Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2018-02-05T23:10:03.023Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Wu, Jenny <SLIC\\JCW>",
                "Microsoft.VSTS.Common.StackRank": 1999999577.0,
                "Microsoft.VSTS.Common.Priority": 1,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Scheduling.Size": 42.0,
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_System.ExtensionMarker": true,
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "ASMB",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": false,
                "System.Description": "continuation of TFS#44223<div><br></div><div><p class=MsoNormal style=\"line-height:normal;margin:0cm 0cm 0.0001pt 18pt;text-align:justify;text-indent:-18pt;\"><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">Acceptance Criteria:</span></p><p class=MsoNormal style=\"line-height:normal;margin:0cm 0cm 0.0001pt 18pt;text-align:justify;text-indent:-18pt;\"><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">1.<span style=\"font-stretch:normal;font-size:7pt;line-height:normal;font-family:&quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">All Active/Finalized GP contracts from list C will be cleared from dealer suspense</span></p><p class=MsoNormal style=\"line-height:normal;margin:0cm 0cm 0.0001pt 18pt;text-align:justify;text-indent:-18pt;\"><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">2.<span style=\"font-stretch:normal;font-size:7pt;line-height:normal;font-family:&quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">All Active / Finalized contracts will have payment status = Finalized</span></p><p class=MsoNormal style=\"line-height:normal;margin:0cm 0cm 0.0001pt 18pt;text-align:justify;text-indent:-18pt;\"><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">3.<span style=\"font-stretch:normal;font-size:7pt;line-height:normal;font-family:&quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">All Active / Remitted contracts that are remitted by internal users with over 60 days (today’s date &gt; effective date) will be changed to Active / Finalized and all these contracts will have payment status ‘Finalized’.</span></p><p class=MsoNormal style=\"line-height:normal;margin:0cm 0cm 0.0001pt 18pt;text-align:justify;\"><span style=\"font-size:10pt;font-family:Arial, sans-serif;\">&nbsp;</span></p><div><br></div></div>"
            },
            "relations": [{
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/44223",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/46596",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47198",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/def84078-3ac6-4cb8-b858-d30f4cca37a5",
                "attributes": {
                    "authorizedDate": "2018-01-30T18:22:25.017Z",
                    "id": 58539,
                    "resourceCreatedDate": "2018-01-30T18:22:20.71Z",
                    "resourceModifiedDate": "2018-01-30T18:22:20.71Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 5512,
                    "name": "01_steps_1_2_3.sql"
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/3ff7a704-6040-4968-99ae-8076baf1fcb7",
                "attributes": {
                    "authorizedDate": "2018-01-30T18:36:33.177Z",
                    "id": 58541,
                    "resourceCreatedDate": "2018-01-30T18:36:30.117Z",
                    "resourceModifiedDate": "2018-01-30T18:36:30.117Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 14739,
                    "name": "02_Clean_up_ PI_RP_for_GAP.sql"
                }
            },
            {
                "rel": "AttachedFile",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/attachments/fbe5fe51-9e9c-45d2-8b22-c43a16de5878",
                "attributes": {
                    "authorizedDate": "2018-01-30T20:43:01.557Z",
                    "id": 58564,
                    "resourceCreatedDate": "2018-01-30T20:42:58.59Z",
                    "resourceModifiedDate": "2018-01-30T20:42:58.59Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "resourceSize": 16528,
                    "name": "03_steps_4_5_6.sql"
                }
            }],
            "_links": {
                "self": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/45515"
                },
                "workItemUpdates": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/45515/updates"
                },
                "workItemRevisions": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/45515/revisions"
                },
                "workItemHistory": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/45515/history"
                },
                "html": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=45515"
                },
                "workItemType": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/75eaeaac-b237-4ee4-a4d9-7af5145cf3d1/_apis/wit/workItemTypes/Requirement"
                },
                "fields": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/fields"
                }
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/45515"
        },
        {
            "id": 47580,
            "rev": 8,
            "fields": {
                "System.Id": 47580,
                "System.AreaId": 287,
                "System.AreaPath": "DP_Unifi_NEW\\Freedom_Team",
                "System.TeamProject": "DP_Unifi_NEW",
                "System.NodeName": "Freedom_Team",
                "System.AreaLevel1": "DP_Unifi_NEW",
                "System.AreaLevel2": "Freedom_Team",
                "System.Rev": 8,
                "System.AuthorizedDate": "2018-02-13T21:01:52.8Z",
                "System.RevisedDate": "9999-01-01T00:00:00Z",
                "System.IterationId": 394,
                "System.IterationPath": "DP_Unifi_NEW\\Freedom\\Sprint 181",
                "System.IterationLevel1": "DP_Unifi_NEW",
                "System.IterationLevel2": "Freedom",
                "System.IterationLevel3": "Sprint 181",
                "System.WorkItemType": "Requirement",
                "System.State": "Closed",
                "System.Reason": "Validation Test Passed",
                "System.AssignedTo": "Khosrovi, Ashkan <SLIC\\AYK>",
                "System.CreatedDate": "2018-02-13T18:40:10.33Z",
                "System.CreatedBy": "Khosrovi, Ashkan <SLIC\\AYK>",
                "System.ChangedDate": "2018-02-13T21:01:52.8Z",
                "System.ChangedBy": "Heidari, Iman <SLIC\\IMH>",
                "System.AuthorizedAs": "Heidari, Iman <SLIC\\IMH>",
                "System.PersonId": 76562,
                "System.Watermark": 282208,
                "System.Title": "ungray in service date",
                "System.BoardColumn": "Closed",
                "System.BoardColumnDone": false,
                "Microsoft.VSTS.Common.StateChangeDate": "2018-02-13T20:35:14.453Z",
                "Microsoft.VSTS.Common.ActivatedDate": "2018-02-13T18:41:58.063Z",
                "Microsoft.VSTS.Common.ActivatedBy": "Heidari, Iman <SLIC\\IMH>",
                "Microsoft.VSTS.Common.ResolvedReason": "Code Complete and System Test Passed",
                "Microsoft.VSTS.Common.ClosedDate": "2018-02-13T20:35:14.453Z",
                "Microsoft.VSTS.Common.ClosedBy": "Khosrovi, Ashkan <SLIC\\AYK>",
                "Microsoft.VSTS.Common.ResolvedDate": "2018-02-13T19:18:07.693Z",
                "Microsoft.VSTS.Common.ResolvedBy": "Heidari, Iman <SLIC\\IMH>",
                "Microsoft.VSTS.Common.Priority": 2,
                "Microsoft.VSTS.Common.Triage": "Pending",
                "Microsoft.VSTS.CMMI.Blocked": "No",
                "Microsoft.VSTS.CMMI.RequirementType": "Functional",
                "Microsoft.VSTS.CMMI.Committed": "No",
                "Microsoft.VSTS.CMMI.UserAcceptanceTest": "Not Ready",
                "Microsoft.VSTS.Common.ValueArea": "Business",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_System.ExtensionMarker": true,
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column": "Closed",
                "WEF_53F48237535A4F6B8E1EC3DE03C6B27F_Kanban.Column.Done": false,
                "System.Description": "ungray in service date",
                "System.History": "Associated with changeset 65481: 47580 ungray in service date",
                "System.Tags": "Accepted – Ready for PROD"
            },
            "relations": [{
                "rel": "System.LinkTypes.Related",
                "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47581",
                "attributes": {
                    "isLocked": false
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65469",
                "attributes": {
                    "authorizedDate": "2018-02-13T19:11:41.097Z",
                    "id": 59659,
                    "resourceCreatedDate": "2018-02-13T19:11:41.097Z",
                    "resourceModifiedDate": "2018-02-13T19:11:41.097Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47580 ungray in service date",
                    "name": "Fixed in Changeset"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65470",
                "attributes": {
                    "authorizedDate": "2018-02-13T19:18:07.693Z",
                    "id": 59663,
                    "resourceCreatedDate": "2018-02-13T19:18:07.693Z",
                    "resourceModifiedDate": "2018-02-13T19:18:07.693Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47580 ungray in service date ",
                    "name": "Fixed in Changeset"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65475",
                "attributes": {
                    "authorizedDate": "2018-02-13T19:43:32.817Z",
                    "id": 59670,
                    "resourceCreatedDate": "2018-02-13T19:43:32.817Z",
                    "resourceModifiedDate": "2018-02-13T19:43:32.817Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47580 ungray in service date",
                    "name": "Fixed in Changeset"
                }
            },
            {
                "rel": "ArtifactLink",
                "url": "vstfs:///VersionControl/Changeset/65481",
                "attributes": {
                    "authorizedDate": "2018-02-13T21:01:52.8Z",
                    "id": 59682,
                    "resourceCreatedDate": "2018-02-13T21:01:52.8Z",
                    "resourceModifiedDate": "2018-02-13T21:01:52.8Z",
                    "revisedDate": "9999-01-01T00:00:00Z",
                    "comment": "47580 ungray in service date",
                    "name": "Fixed in Changeset"
                }
            }],
            "_links": {
                "self": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47580"
                },
                "workItemUpdates": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47580/updates"
                },
                "workItemRevisions": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47580/revisions"
                },
                "workItemHistory": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47580/history"
                },
                "html": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/web/wi.aspx?pcguid=ae61e06b-c830-47b3-9e3f-e26ba75292d0&id=47580"
                },
                "workItemType": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/75eaeaac-b237-4ee4-a4d9-7af5145cf3d1/_apis/wit/workItemTypes/Requirement"
                },
                "fields": {
                    "href": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/fields"
                }
            },
            "url": "http://cv.websct.ia.iafg.net:8080/tfs/SOPCV_SNW/_apis/wit/workItems/47580"
        }]
    }`);
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