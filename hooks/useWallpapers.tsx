export interface Wallpaper {
    url: string;
    title: string;
}

export interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpaper = useWallpapers()
    return wallpaper.filter(wallpaper => wallpaper.suggested)
}

export function useLikedWallpapers(): FullWallpaper[] {
    const wallpaper = useWallpapers()
    return wallpaper.filter(wallpaper => wallpaper.liked)
}

export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpaper = useWallpapers()
    return wallpaper.filter(wallpaper => wallpaper.library)
}

export function useWallpapers(): FullWallpaper[] {
    return [
        {
            url: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Three trees",
            liked: false,
            suggested: false,
            library: false,
        },
        {
            url: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D",
            title: "One tree",
            liked: true,
            suggested: false,
            library: true,
        },
        {
            url: "https://static.vecteezy.com/system/resources/previews/022/515/438/non_2x/ai-generative3d-texture-colorful-abstract-background-for-desktop-wallpaper-image-free-photo.jpg",
            title: "Big Moon",
            liked: false,
            suggested: true,
            library: false,
        },
        {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtulTdHPMImlHcmBevW28PBAowL-i1mH52lw&s",
            title: "Astronaut",
            liked: true,
            suggested: true,
            library: false,
        },
        {
            url: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
            title: "Picture flyer",
            liked: false,
            suggested: false,
            library: true,
        },
        {
            url: "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Nature view",
            liked: false,
            suggested: true,
            library: false,
        },
        {
            url: "https://images.pexels.com/photos/943907/pexels-photo-943907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Cityscape",
            liked: true,
            suggested: true,
            library: false,
        },
        {
            url: "https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Sunny beach",
            liked: true,
            suggested: true,
            library: false,
        }
    ];
}