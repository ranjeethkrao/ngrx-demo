export class DataLayer {
    page: LayerInfo;
    component: ComponentTracking
}

interface LayerInfo {
    pageInfo: PageInfo,
    siteInfo: SiteInfo,
    userInfo: UserInfo,
    pageComponent: {
        componentAvailable: string,
    },
}

interface PageInfo {
    pageName: string,
    section: string,
    subSection1: string,
    subSection2: string,
    pageHierarchy: string,
    pageType: string,
    pageVisible: string,
    referringUrl: string
}
interface SiteInfo {
    server: string,
    platform: string,
    version: string
}

interface UserInfo {
    userLocation: string,
    profileInfo: string,
    authState: string,
    userType: string,
    userCategory: string,
    userDevice: string,
    qmilesOrQrewardsAvailable: string,
    userPreferences: string
}

interface ComponentTracking {
    componentName: string;
    componentEvent: string;
    componentStartSource: string;
}