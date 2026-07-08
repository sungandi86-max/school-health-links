export type IconName =
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
  teacherName: "보건실",
  title: "School Health Links",
  introTitle: "쑤캥 보건실 링크허브",
  introDescription: "온라인 보건실 · School Health Hub · AI · 전자책",
  catalogTitle: "🩺 쑤캥 보건실 링크모음",
  catalogDescription: "온라인 보건실 · School Health Hub · AI · 전자책"
};

export const cards: LinkCard[] = [
  {
    kind: "group",
    id: "health-office-tools",
    number: "01",
    name: "쑤캥 보건실 도구모음",
    description: "온라인 보건실과 보건업무 도구를 한눈에",
    thumb: { kind: "icon", icon: "school" },
    items: [
      { name: "도구모음 바로가기", description: "온라인 보건실과 보건업무 도구를 모아둔 링크입니다.", href: "https://school-healthroom-toolbox.vercel.app/", thumb: { kind: "icon", icon: "school" } }
    ]
  },
  {
    kind: "group",
    id: "training-application",
    number: "02",
    name: "보건교사를 위한 온라인 보건실 만들기",
    description: "Google Sheets · AI · Apps Script 실습형 강의",
    thumb: { kind: "icon", icon: "school" },
    items: [
      { name: "강의 소개 보기", description: "온라인 보건실 만들기 강의 소개를 확인합니다.", href: "https://blog.naver.com/bogun_sh/224340277363", thumb: { kind: "icon", icon: "manual" } },
      { name: "쌤모임 신청하기", description: "실습형 강의 신청 페이지로 이동합니다.", href: "https://ssam.teacherville.co.kr/ssam/meet/11299.edu", thumb: { kind: "icon", icon: "school" } }
    ]
  },
  {
    kind: "group",
    id: "online-health-office-demo",
    number: "03",
    name: "온라인 보건실 예시 살펴보기",
    description: "학교에서 바로 떠올려보는 보건실 데모",
    thumb: { kind: "icon", icon: "docs" },
    items: [
      { name: "예시 살펴보기", description: "학교 현장에서 활용할 수 있는 예시 화면을 살펴봅니다.", href: "https://blog.naver.com/bogun_sh/224291358299", thumb: { kind: "icon", icon: "docs" } }
    ]
  },
  {
    kind: "group",
    id: "health-teacher-ebook",
    number: "04",
    name: "보건교사 전자책",
    description: "실무와 준비 과정을 담은 가이드",
    thumb: { kind: "icon", icon: "manual" },
    items: [
      { name: "전자책 보기", description: "보건업무 자동화와 온라인 보건실 활용 가이드", href: "https://kmong.com/self-marketing/741623/yE7nTba4EM", thumb: { kind: "icon", icon: "manual" } },
      { name: "전자책 보기", description: "사립학교 보건교사를 준비하는 분들을 위한 경험 기반 가이드", href: "https://kmong.com/self-marketing/731076/PTGcZqmGsT", thumb: { kind: "icon", icon: "download" } }
    ]
  },
  {
    kind: "group",
    id: "kiosk-self-care-review",
    number: "05",
    name: "보건실 키오스크·셀프처치대 운영 후기",
    description: "보건실 공간과 운영을 바꾼 기록",
    thumb: { kind: "icon", icon: "magazine" },
    items: [
      { name: "운영 후기 보기", description: "보건실 키오스크와 셀프처치대 운영 사례를 살펴봅니다.", href: "https://blog.naver.com/bogun_sh/224223219005", thumb: { kind: "icon", icon: "magazine" } }
    ]
  },
  {
    kind: "group",
    id: "blog",
    number: "06",
    name: "블로그 바로가기",
    description: "AI 활용과 온라인 보건실 기록",
    thumb: { kind: "icon", icon: "naver-blog" },
    items: [
      { name: "블로그 바로가기", description: "보건교사의 AI 활용과 온라인 보건실 기록을 살펴봅니다.", href: "https://blog.naver.com/bogun_sh", thumb: { kind: "icon", icon: "naver-blog" } }
    ]
  },
  {
    kind: "group",
    id: "contact",
    number: "07",
    name: "협업 및 강의 문의",
    description: "Email · sungandi@sen.go.kr",
    thumb: { kind: "icon", icon: "contact" },
    items: [
      { name: "이메일 보내기", description: "협업, 강의, 연수 문의를 남깁니다.", href: "mailto:sungandi@sen.go.kr", thumb: { kind: "icon", icon: "contact" } }
    ]
  }
];
