import React, { ReactElement } from "react";

interface WithLoadingProps {
    loading: boolean;
    widget_data: any;
}

export const withToolKit = <P extends object>(Component: React.ComponentType<P>) =>{
    class WithLoading extends React.Component<P & WithLoadingProps> {
        state = {
            name: "emy"
        }
        render() {
            return <Component {...(this.state as P)} {...this.state} />
        }
    };
    return WithLoading
}