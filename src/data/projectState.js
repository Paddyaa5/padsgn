//import images
import KM from "../images/km.jpg";
import KMsmall from "../images/km.jpg";
import LT from "../images/lt.jpg";
import LTsmall from "../images/lt.jpg";

export const ProjectState = () => {
    return [
        {
            title: "The Kilometre Club",
            mainImg: KM,
            smallImg: KMsmall,
            url: "/projects/the-kilometre-club",
            features: [
                {
                    title: "Design",
                    description: "Design made to excite.",
                },
                {
                    title: "Membership",
                    description:
                        "Using private routing and google firebase authentication, only logged in members can view certains pages such as Membership Affiliation.",
                },
                {
                    title: "Animation",
                    description: "Page animations ..",
                },
            ],
        },
        {
            title: "Little Tap",
            mainImg: LT,
            smallImg: LTsmall,
            url: "/projects/little-tap",
            features: [
                {
                    title: "Design",
                    description: "Design made to excite.",
                },
                {
                    title: "Membership",
                    description:
                        "Using private routing and google firebase authentication, only logged in members can view certains pages such as Membership Affiliation.",
                },
                {
                    title: "Animation",
                    description: "Page animations ..",
                },
            ],
        },
    ];
};
