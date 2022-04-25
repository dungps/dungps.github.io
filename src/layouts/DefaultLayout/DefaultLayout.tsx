import { PropsWithChildren } from "react";

const DefaultLayout = (props: PropsWithChildren<any>) => {
    return props.children;
}

export default DefaultLayout