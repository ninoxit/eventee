export default function ProfilePic(firstname: string) {
    const baseurl = "https://bpzhrnohprgmwxqrdyow.supabase.co/storage/v1/object/public/profile_pics/";
    const firstLetter = firstname.charAt(0).toUpperCase();
    const imgUrl = `${baseurl}${firstLetter}.png`;

    return (
        <>
            <img src={imgUrl} alt={`${firstname}'s profile pic`} />
        </>
    );
}
