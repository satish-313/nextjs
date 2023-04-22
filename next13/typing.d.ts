type owner = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
};

type gitRepos = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: owner;
    html_url: string;
    description: string | null;
    fork: boolean;
    url:string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
};
