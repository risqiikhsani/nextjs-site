import {withRestrictedAccess} from '@/components/withRestrictedAccess'

function Page(){
    return(
        <p>My profile</p>
    )
}

export default withRestrictedAccess(Page);