import { getTeamMember } from '@/lib/team-store';
import TeamDetailsMain from '@/pages/team/team-details';
import { PageParamsProps } from '@/types/custom-d-t';
import React from 'react';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const member = await getTeamMember(String(id));
    return {
        title: member?.name ? member.name : "Team Details",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <TeamDetailsMain id={id} />
    );
}
