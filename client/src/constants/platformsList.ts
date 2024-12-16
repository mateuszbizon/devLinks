import CodepenIcon from "@/components/icons/CodepenIcon";
import CodewarsIcon from "@/components/icons/CodewarsIcon";
import DevtoIcon from "@/components/icons/DevtoIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import FreeCodeCampIcon from "@/components/icons/FreeCodeCampIcon";
import FrontendMentorIcon from "@/components/icons/FrontendMentorIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import GitLabIcon from "@/components/icons/GitLabIcon";
import HashnodeIcon from "@/components/icons/HashnodeIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import StackOverflowIcon from "@/components/icons/StackOverflowIcon";
import TwitchIcon from "@/components/icons/TwitchIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
import { PLATFORM_NAMES } from ".";

export const PLATFORMS_LIST = [
    { value: PLATFORM_NAMES.github, icon: GithubIcon(), bgColor: "#1A1A1A" },
    { value: PLATFORM_NAMES.frontendMentor, icon: FrontendMentorIcon(), bgColor: "#FFFFFF", isDarkTextColor: true },
    { value: PLATFORM_NAMES.twitter, icon: TwitterIcon(), bgColor: "#43B7E9" },
    { value: PLATFORM_NAMES.linkedIn, icon: LinkedInIcon(), bgColor: "#2D68FF" },
    { value: PLATFORM_NAMES.youtube, icon: YoutubeIcon(), bgColor: "#EE3939" },
    { value: PLATFORM_NAMES.facebook, icon: FacebookIcon(), bgColor: "#2442AC" },
    { value: PLATFORM_NAMES.twitch, icon: TwitchIcon(), bgColor: "#EE3FC8" },
    { value: PLATFORM_NAMES.devTo, icon: DevtoIcon(), bgColor: "#333333" },
    { value: PLATFORM_NAMES.codewars, icon: CodewarsIcon(), bgColor: "#8A1A50" },
    { value: PLATFORM_NAMES.codepen, icon: CodepenIcon(), bgColor: "#333333" },
    { value: PLATFORM_NAMES.freeCodeCamp, icon: FreeCodeCampIcon(), bgColor: "#302267" },
    { value: PLATFORM_NAMES.gitLab, icon: GitLabIcon(), bgColor: "#EB4925" },
    { value: PLATFORM_NAMES.hashnode, icon: HashnodeIcon(), bgColor: "#0330D1" },
    { value: PLATFORM_NAMES.stackOverflow, icon: StackOverflowIcon(), bgColor: "#EC7100" },
]