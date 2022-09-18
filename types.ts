declare module namespace {
  export interface TaskObject {
    dayOne: boolean;
    focusArea: string;
    createdAt: Date;
    id: string;
    assignee?: any;
    dueDate: Date;
    isArchived: boolean;
    isCompleted: boolean;
    name: string;
    parentId: string;
    priority: string;
    reporter: string;
    startDate: Date;
    type: string;
    familyOrder?: any;
    taskNumber?: any;
    treeLocation?: any;
    playbookId: string;
    sectionId?: any;
    sectionOrder: number;
    projectRelType: string;
    playbookFunction: string;
    riskImpact?: any;
    riskLikelihood?: any;
    issueImpact?: any;
    decisionMaker: string[];
    dependencyTarget?: any;
    sourceDeleted?: any;
    oneTimeCost: number;
    hasDescription: boolean;
    commentCount: string;
    attachmentCount: string;
    orderNumber?: any;
    dependencySource?: any;
    subTaskCount: number;
    riskCount: number;
    decisionCount: number;
    dependenciesCount: number;
    issueCount: number;
    childsOneTimeCost: number;
  }
}
