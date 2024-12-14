export interface Wallpaper {
    url: string,
    title: string
}

export function useWallpapers(): Wallpaper[] {
    return [
        {
            url: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
            title: "Three trees"
        },
        {
            url: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D",
            title: "One tree"
        },
        {
            url: "https://static.vecteezy.com/system/resources/previews/022/515/438/non_2x/ai-generative3d-texture-colorful-abstract-background-for-desktop-wallpaper-image-free-photo.jpg",
            title: "Big Moon"
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtulTdHPMImlHcmBevW28PBAowL-i1mH52lw&s",
            title: "Astronaut"
        },
        {
            url: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
            title: "Picture flyer"
        },
    ]
}