import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from  'next/router';
import { auth, provider } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const ActionItemsWrapper = tw.div `
  flex-1 p-4
`

const ActionItemHeader = tw.div `
	flex justify-between items-center
`;

const ActionItemHeading = tw.img `
h-28
`;

const ActionItemProfileSection = tw.div `
flex justify-between items-center gap-x-4
`;

const ActionItemProfileName = tw.span `
text-sm font-semibold
`;

const ActionItemProfilePicture = tw.span `

`;

const ActionItemsButtons = tw.div `
flex gap-x-3 text-xl
`;

const ActionButton = tw.button`
bg-gray-200 flex flex-col flex-1 h-32 items-center justify-center rounded transition ease hover:bg-gray-100 hover:shadow-md hover:scale-105
`;

const ActionImage = tw.img`
h-3/5
`;

const ActionItemsFooter = tw.div `
h-20 text-2xl p-4 flex items-center justify-start mt-8
`;

const ActionItems = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const onClick = () => {
        signOut(auth)
    }

    useEffect(() => {
        return () => {
            onAuthStateChanged(auth, user => {
                if(user) {
                    setUser(
                        {
                            displayName: user.displayName,
                            picture: user.photoURL
                        } 
                    )
                    //router.push('/components/login')
                }
                else {
                    setUser(null);
                    router.push('/components/login')
                }
            })
        }
    }, []);

    return (
        <ActionItemsWrapper className = "flex flex-col">
            <ActionItemHeader>
                <ActionItemHeading src = "https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
                <ActionItemProfileSection>
                    <ActionItemProfileName>
                        {user?.displayName}
                    </ActionItemProfileName>
                    <ActionItemProfilePicture onClick = {onClick}>
                        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white border-gray-200 p-px" src={user?.picture || "#"} alt=""/>
                    </ActionItemProfilePicture>
                </ActionItemProfileSection>
            </ActionItemHeader>
            <ActionItemsButtons>
                <Link href = '/components/search-location'>
                    <ActionButton>
                        <ActionImage src = "https://i.ibb.co/cyvcpfF/uberx.png"/>
                        <div className='buttonText'>Ride</div>
                    </ActionButton>
                </Link>
                <Link href = '/components/search-location'>
                    <ActionButton>
                        <ActionImage src = "https://i.ibb.co/n776JLm/bike.png"/>
                        <div className='buttonText'>2-Wheels</div>
                    </ActionButton>
                </Link>
                <Link href = '/components/search-location'>
                    <ActionButton>
                        <ActionImage src = "https://i.ibb.co/5RjchBg/uberschedule.png"/>
                        <div className='buttonText'>Reserve</div>
                    </ActionButton>
                </Link>        
            </ActionItemsButtons>
			<ActionItemsFooter className = "bg-gray-200">
				Where to?
			</ActionItemsFooter>
        </ActionItemsWrapper>
    )
}

export default ActionItems
