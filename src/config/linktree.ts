export type IconName =
  | "dorms-community"
  | "naver-blog"
  | "instagram"
  | "kakao-chat"
  | "kakao-group"
  | "download"
  | "manual"
  | "privacy"
  | "school"
  | "docs"
  | "contact"
  | "magazine"
  | "code"
  | "game";

export type Thumb =
  | { kind: "image"; src: string; alt: string }
  | { kind: "icon"; icon: IconName };

export type LinkItem = {
  name: string;
  description?: string;
  href: string;
  thumb?: Thumb;
};

export type LinkCard =
  | {
      kind: "group";
      id: string;
      number: string;
      name: string;
      description: string;
      thumb: Thumb;
      items: LinkItem[];
    }
  | {
      kind: "link";
      id: string;
      number: string;
      name: string;
      description: string;
      href: string;
      thumb: Thumb;
    };

export const profile = {
  teacherName: "OOO",
  title: "DoRms 교사 OOO",
  introTitle: "DoRms 교사 OOO",
  introDescription: "환영합니다! 교육현장의 문제를 AI와 함께 재밌게 풀어보는 교사 커뮤니티 DoRms의 OOO입니다.",
  catalogTitle: "DoRms OOO",
  catalogDescription: "설명1. 수업, 기록, 자료, 커뮤니티 활동을 이곳에 모아둡니다."
};

export const cards: LinkCard[] = [
  {
    kind: "group",
    id: "dorms-activity",
    number: "01",
    name: "도름스 커뮤니티 나의 활동",
    description: "DoRms에서 나누고 있는 나의 활동을 모아두는 곳",
    thumb: { kind: "image", src: "/assets/dorms-community.png", alt: "DoRms community" },
    items: [
      { name: "내 활동 링크1", description: "설명1", href: "https://example.com", thumb: { kind: "image", src: "/assets/dorms-community.png", alt: "DoRms community" } },
      { name: "내 활동 링크2", description: "설명2", href: "https://example.com", thumb: { kind: "icon", icon: "dorms-community" } },
      { name: "내 활동 링크3", description: "설명3", href: "https://example.com", thumb: { kind: "icon", icon: "docs" } }
    ]
  },
  {
    kind: "group",
    id: "classroom",
    number: "02",
    name: "링크1",
    description: "설명1",
    thumb: { kind: "icon", icon: "school" },
    items: [
      { name: "내부 링크1", description: "설명1", href: "https://example.com", thumb: { kind: "icon", icon: "docs" } },
      { name: "내부 링크2", description: "설명2", href: "https://example.com", thumb: { kind: "icon", icon: "manual" } },
      { name: "내부 링크3", description: "설명3", href: "https://example.com", thumb: { kind: "icon", icon: "download" } }
    ]
  },
  {
    kind: "link",
    id: "naver-blog",
    number: "03",
    name: "네이버 블로그",
    description: "설명2",
    href: "https://blog.naver.com/",
    thumb: { kind: "icon", icon: "naver-blog" }
  },
  {
    kind: "link",
    id: "instagram",
    number: "04",
    name: "링크2",
    description: "설명3",
    href: "https://example.com",
    thumb: { kind: "icon", icon: "instagram" }
  },
  {
    kind: "group",
    id: "resources",
    number: "05",
    name: "자료 모음",
    description: "설명4",
    thumb: { kind: "icon", icon: "docs" },
    items: [
      { name: "자료 링크1", description: "설명1", href: "https://example.com", thumb: { kind: "icon", icon: "manual" } },
      { name: "자료 링크2", description: "설명2", href: "https://example.com", thumb: { kind: "icon", icon: "download" } }
    ]
  },
  {
    kind: "group",
    id: "contact",
    number: "06",
    name: "연락처",
    description: "설명5",
    thumb: { kind: "icon", icon: "contact" },
    items: [
      { name: "문의 링크", description: "설명1", href: "mailto:teacher@example.com", thumb: { kind: "icon", icon: "contact" } }
    ]
  }
];
