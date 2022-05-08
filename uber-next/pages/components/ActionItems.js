import React from 'react';
import tw from 'tailwind-styled-components';

const ActionItemsWrapper = tw.div `
  flex-1 px-5
`

const ActionItemHeader = tw.div `
	flex justify-between items-center
`;

const ActionItemHeading = tw.img `
h-10
`;

const ActionItemProfileSection = tw.div `
flex justify-between items-center gap-x-4
`;

const ActionItemProfileName = tw.span `
text-xs font-semibold
`;

const ActionItemProfilePicture = tw.span ``;

const ActionItemsButtons = tw.div `
flex gap-x-2 
`;

const ActionItemsFooter = tw.div ``;

const ActionItems = () => {
    return (
        <ActionItemsWrapper className = "flex flex-col gap-y-6 ">
            <ActionItemHeader>
                <ActionItemHeading src = "/assets/uberLogo.png"/>
                <ActionItemProfileSection>
                    <ActionItemProfileName>
                        Kunal Gulati
                    </ActionItemProfileName>
                    <ActionItemProfilePicture>
                        <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </ActionItemProfilePicture>
                </ActionItemProfileSection>
            </ActionItemHeader>
            <ActionItemsButtons>
                <button className='bg-zinc-100 flex flex-col flex-1 h-24 items-center justify-center rounded'>
                    <span></span>
                    <span className='buttonText'>Ride</span>
                </button>
                <button className='bg-zinc-100 flex flex-col flex-1 h-24 items-center justify-center rounded'>
                    <span></span>
                    <span className='buttonText'>2-Wheels</span>
                </button>
                <button className='bg-zinc-100 flex flex-col flex-1 h-24 items-center justify-center rounded'>
                    <span></span>
                    <span className='buttonText'>Reserve</span>
                </button>
            </ActionItemsButtons>
			<ActionItemsFooter className = "bg-zinc-100 p-16">
				Where to?
			</ActionItemsFooter>
        </ActionItemsWrapper>
    )
}

export default ActionItems
