import React, { Ref } from 'react'
import Title from './Title'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import { LinearProgress, useTheme } from '@mui/material'
import Image from 'next/image'

const Education = () => {
	const { t } = useTranslation()
    const theme = useTheme()
	return (
		<div>
			<Title title={t('education')}></Title>
			<div style={{margin: '10px 10px'}}>{t('bach')}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 70 192.756 60" style={{marginLeft: '10px'}}>
                <g>
                    <path style={{fill: 'none'}} d="M0 0h192.756v192.756H0V0z"/>
                    <path d="M61.613 111.32c0-.936.884-.572.884-.936 0-.156-.364-.104-.416-.104-.416 0-.832.053-1.247.053-.364 0-.676-.053-1.04-.053-.052 0-.26 0-.26.104 0 .416 1.04.104 1.04.885v4.416c0 2.027.675 4.002 4.105 4.002 3.847 0 3.69-3.273 3.69-3.896v-4.107c0-1.195.779-.936.779-1.299 0-.051-.104-.104-.155-.104-.26 0-.521.053-.728.053-.52 0-1.04-.053-1.559-.053-.052 0-.156.053-.156.104 0 .52 1.248-.051 1.248 1.299v4.262c0 1.561-.572 3.172-3.015 3.172-1.819 0-3.17-.936-3.17-3.066v-4.732zM76.062 117.713c0 1.82-1.144 1.248-1.144 1.715 0 .053 0 .156.156.156.104 0 .78-.051 1.248-.051.624 0 1.039.051 1.352.051.104 0 .104-.104.104-.207 0-.312-1.144.104-1.144-1.039v-5.406c0-.26.052-.312.104-.312.104 0 .26.26.26.26l5.665 6.395c.26.311.416.363.52.363s.104-.209.104-.572v-7.641c0-.936.78-.727.78-1.039 0-.104-.052-.104-.156-.104-.312 0-.883.053-1.299.053-.416 0-.832-.053-1.195-.053-.104 0-.156 0-.156.104 0 .416 1.455-.051 1.455 1.664v5.508c0 .105 0 .156-.052.156l-.156-.156-6.289-7.016c-.052-.053-.156-.26-.312-.26-.208 0-.416.053-.624.053-.208 0-.415-.053-.623-.053-.052 0-.156.053-.156.104 0 .469 1.56-.26 1.56 2.443v4.884h-.002zM91.342 118.129c0 1.299-1.04.883-1.04 1.248 0 .104.053.207.312.207.156 0 .416-.051 1.248-.051.572 0 1.144.051 1.403.051s.312-.051.312-.156c0-.363-1.195-.104-1.195-.986v-7.068c0-.988.936-.676.936-.988 0-.104-.052-.104-.26-.104-.364 0-.779.053-1.195.053-.468 0-.987-.053-1.455-.053-.104 0-.104 0-.104.104 0 .312 1.04.053 1.04.988v6.755h-.002zM103.4 118.961c.104.26.26.832.467.832.209 0 .312-.469.469-.781l3.273-7.742c.365-.885.729-.572.729-.832 0-.104-.104-.156-.209-.156-.207 0-.416.053-1.039.053-.26 0-.572-.053-.883-.053-.104 0-.156 0-.156.156 0 .311.832.051.832.623.051.312-.104.729-.209.936l-2.287 5.613c-.051.156-.104.363-.207.363-.156 0-.26-.26-.52-.986l-2.34-5.406a1.318 1.318 0 0 1-.104-.52c0-.467.572-.467.52-.676 0-.051-.104-.104-.154-.104-.209 0-.676.053-1.041.053-.416 0-.832-.053-1.195-.053-.156 0-.207.053-.207.156 0 .311.676.051 1.039.832l3.222 7.692zM115.873 111.633c0-.885-.051-.832 1.248-.832.52 0 1.871-.053 2.234.363.209.312 0 .936.312.936.053 0 .26-.104.26-1.559 0-.156-.053-.26-.156-.26-.363 0-1.611.053-1.871.053-.52 0-1.246-.053-3.689-.053-.416 0-.469.053-.469.156 0 .156.26.156.365.207.727.104.727.729.727 1.299v6.029c0 .572-.051.988-.363 1.145-.416.207-.572.156-.572.311 0 .105.053.156.209.156.52 0 1.039-.051 1.559-.051 1.039-.053 2.027.051 3.014.051.572 0 .885 0 1.301-.467.311-.312.676-.779.676-1.248 0-.053-.053-.156-.105-.156-.207 0-.623 1.352-3.689 1.352-1.092 0-.988-.312-.988-1.092v-2.441c0-.209-.051-.416.26-.416h1.924c1.092 0 .676 1.143 1.039 1.143.104 0 .156-.053.156-.156v-1.039-1.352c0-.104-.053-.207-.156-.207-.311 0 .053 1.039-1.299 1.039h-1.404c-.57 0-.52 0-.52-.469v-2.442h-.003zM130.635 114.803c.936-.363 1.662-1.248 1.662-2.287 0-2.547-2.91-2.234-3.117-2.234-.676 0-1.455.053-2.184.053-.676 0-.623-.053-.832-.053-.156 0-.26.053-.26.156 0 .416 1.092-.104 1.092 1.143v6.705c0 .988-.936.832-.936 1.143 0 .053.053.156.104.156.52 0 1.041-.051 1.508-.051 1.092 0 1.402.051 1.508.051.104 0 .26 0 .26-.104 0-.469-1.404-.053-1.404-1.195v-2.754c0-.156-.051-.365.365-.365 1.455 0 1.246-.051 1.766.676l1.455 2.287c.469.779.988 1.455 1.977 1.455.104 0 .83 0 .83-.156 0-.311-.623.156-1.609-1.299l-2.185-3.327zm-2.6-3.639c0-.52.312-.467.779-.467 1.301 0 2.496.52 2.496 2.131 0 1.662-1.248 1.871-1.82 1.871-.623 0-1.455.051-1.455-.156v-3.379zM140.197 118.961c.053.207 1.248.727 2.234.727 2.963 0 3.742-1.662 3.742-2.807 0-3.586-5.301-2.182-5.301-4.625 0-1.248 1.092-1.715 2.131-1.715 1.145 0 2.131.572 2.496 1.715.051.104.154.363.258.363.156 0 .156-.051.156-.154l-.207-1.82c0-.156-.053-.156-.156-.156s-.156.105-.26.105c-.156 0-.623-.469-2.184-.469-1.559 0-2.961.832-2.961 2.494 0 3.432 5.354 2.027 5.354 4.523 0 1.402-1.197 2.078-2.443 2.078-1.82 0-2.65-1.352-2.807-1.975-.053-.26-.053-.416-.209-.416-.154 0-.207.156-.154.416l.311 1.716zM153.295 118.129c0 1.299-1.039.883-1.039 1.248 0 .104.053.207.26.207s.467-.051 1.299-.051c.52 0 1.092.051 1.404.051.207 0 .26-.051.26-.156 0-.363-1.145-.104-1.145-.986v-7.068c0-.988.936-.676.936-.988 0-.104-.051-.104-.26-.104-.416 0-.832.053-1.195.053-.52 0-.986-.053-1.455-.053-.104 0-.156 0-.156.104 0 .312 1.039.053 1.092.988v6.755h-.001zM164.834 118.441c0 .779-1.041.623-1.041.936 0 .156 0 .207.156.207.053 0 .312-.051 1.768-.051.416 0 .779.051 1.092.051.104 0 .104-.156.104-.156 0-.416-1.039 0-1.039-1.09v-6.705c0-.729-.104-.676.52-.676h1.871c1.352 0 .623 1.039 1.092 1.039.207 0 .156-.156.156-.312l-.053-1.039c0-.311-.104-.363-.363-.363s-1.508.053-3.898.053c-1.664 0-2.703-.053-3.689-.053-.262 0-.262.312-.262.467l-.154 1.301c0 .051.051.154.154.154.156 0 .156-.154.209-.311.26-.729.26-.936 1.092-.936h2.131c.207.051.156.52.156.623v6.861h-.002zM177.982 114.596c.104.154.26.414.26.676v3.17c0 .936-.986.623-.986.986 0 .156.051.156.207.156.104 0 .572-.051 1.195-.051.469 0 1.248.051 1.404.051.207 0 .311 0 .311-.156 0-.416-1.092-.051-1.092-1.195v-3.223c0-.154.105-.26.365-.57l1.818-2.859c.209-.311.363-.727.729-.936.104-.051.311-.104.311-.207s-.051-.156-.154-.156c-.365 0-.729.053-1.145.053-.312 0-.623-.053-.936-.053-.156 0-.26 0-.26.156 0 .311.986.051.986.727 0 .312-.207.572-.311.676l-1.352 2.234c-.104.156-.156.262-.26.262-.053 0-.156-.105-.26-.262l-1.559-2.545c-.105-.105-.262-.312-.262-.521 0-.363.625-.414.625-.623 0-.104-.156-.104-.26-.104s-.469.053-.885.053c-.936 0-1.143-.053-1.506-.053-.104 0-.209.104-.209.156 0 .26.676.104.988.623l2.238 3.535zM153.242 74.991c1.301 0 2.393 1.091 2.393 2.391 0 1.352-1.092 2.443-2.393 2.443-1.35 0-2.391-1.091-2.391-2.443a2.386 2.386 0 0 1 2.391-2.391zm22.869 25.622c-.104 1.041-.623 1.715-2.598 2.287-1.561.52-1.352 1.352.207 1.404 4.262-.625 5.613-.52 9.459-.105 1.508 0 1.248-.986.312-1.402-2.234-.883-2.6-.883-3.066-3.119l-.156-22.452c0-1.299.469-2.807-.883-2.443-2.547.987-2.756 1.092-5.094 1.923-1.248.52-.779 1.091.104 1.403 1.248.52 1.352 1.248 1.455 2.183l.26 20.321zm-13.148-.154c-.105 1.09-.625 1.766-2.6 2.338-1.559.469-1.402 1.299.209 1.402 4.262-.623 5.613-.52 9.459-.104 1.455-.051 1.246-.986.311-1.455-2.285-.883-2.598-.883-3.066-3.119l-.156-22.4c0-1.299.469-2.807-.883-2.495-2.598 1.04-2.807 1.143-5.094 1.923-1.246.52-.779 1.143.104 1.403 1.248.52 1.352 1.299 1.404 2.183l.312 20.324zm-12.006-8.836c-.105-1.144-.26-2.027-1.561-2.391-.936-.104-1.402-.936-.051-1.456 2.65-.832 3.014-.988 5.092-2.651.625-.364 1.352-.052.988 1.092-.104.832-.104 1.247-.156 2.183v11.694c.105 1.924 1.611 2.234 2.547 2.6.936.363 1.039 1.506-.104 1.506-4.105-.57-5.041-.623-9.043.209-1.352 0-1.611-1.039.051-1.611 1.611-.572 2.184-.883 2.236-2.287v-8.888h.001zm-36.746-2.132c.936-9.979 7.328-14.137 16.32-14.864 9.51.052 10.861.675 10.705 5.977.053 1.923-1.195 2.339-2.078.208-1.039-1.975-1.871-3.118-4.262-4.105-8.213-1.819-14.24 3.43-14.605 12.37-.57 12.579 13.514 16.268 16.424 11.538.625-1.195.625-4.469.572-7.172-.52-1.767-2.234-1.559-3.846-1.663-1.82.156-2.443-1.871-.053-1.871 2.34 0 6.758.26 12.475-.312 1.715.104 1.818 1.611-.26 1.871-.885.156-2.756.156-3.016 1.611-.207 7.692 1.561 8.42-4.209 10.499-7.381 1.715-15.332.936-19.803-3.379-2.026-1.82-4.52-5.874-4.364-10.708zm-19.023 5.094c.832-8.264 7.693-10.239 11.226-10.239 4.211.104 5.562 1.508 5.613 2.911 0 1.403-.986 2.131-2.078 1.819-2.287-.572-1.82-3.015-4.887-3.222-3.48.52-5.613 4.417-4.988 9.095.57 4.625 5.094 8.108 10.602 5.249 1.352-.26 1.455.832.365 1.561-10.135 6.235-16.269-2.601-15.853-7.174zM63.952 80.656c-.208-2.807-1.091-1.975-3.274-2.807-1.767-.364-1.923-1.611-.156-1.715 3.119.26 4.678.312 7.276-.104 1.196.208 1.715.676 2.131 1.819 2.183 4.626 5.353 11.539 7.536 16.164.416.832.624.987 1.092-.104l6.444-16.424c.728-1.403 1.507-1.715 3.743-1.507 3.897.052 4.833-.052 6.756-.26 1.612.052 1.508 1.299-.104 1.767-2.495 0-3.794.884-4.21 2.755l.364 18.867c.416 2.807 1.871 2.91 4.521 3.586 1.143.52.883 1.352-.104 1.611-5.509-.625-7.38-.572-12.837-.053-1.56.156-1.664-1.195.052-1.559 1.975-.469 2.495-.832 2.962-1.871l-.416-18.191c-.052-.728-.52-.728-.78.104l-7.692 19.179c-.728 1.662-1.04 1.662-1.819.363L66.342 82.63c-.26-.676-.624-.468-.624-.052l.052 17.359c.26 2.027 1.663 2.131 4.521 3.016.78.26.832.936.156 1.352-5.51-.469-6.445-.469-11.539.207-.832 0-1.195-1.195.052-1.352 2.703-.779 3.482-.832 3.846-2.391l1.146-20.113z" fill="#cf4037"/>
                    <path d="M9.535 94.429c-1.767-6.185-.727-11.954-.727-18.867 6.185-3.119 12.37-3.378 19.022-3.378 5.769 0 13.929.728 18.814 3.378.52 6.497.832 12.266-.884 19.698-1.663 7.433-6.548 17.724-17.723 25.312-12.162-8.004-16.111-17.619-18.502-26.143z" fill="#fff"/>
                    <path d="M10.055 94.481c-1.663-5.977-.676-11.538-.676-18.295 6.029-2.962 11.954-3.274 18.399-3.274 5.613 0 13.514.728 18.295 3.274.468 6.341.728 11.902-.884 19.126-1.611 7.172-6.341 17.152-17.151 24.48-11.798-7.692-15.644-17.048-17.983-25.311z" fill="#cf4037"/>
                    <path d="M15.72 85.698l-5.769 6.288c1.3 6.081 4.886 18.762 18.087 27.338 13.045-8.99 16.528-21.309 17.308-27.442l-5.613-6.237-6.289 6.341-5.717-6.288-5.769 6.236-6.238-6.236zM18.371 79.304c-.052 0-.208-.104 0-.156.156 0 .416 0 .78.416.104-.052.468-.572.78-.416 0 .052-1.144 2.599-1.248 2.807-.52-.26-3.482-.468-3.17-.468.26 0-2.703.104-3.119.468-.156-.26-1.299-2.858-1.299-2.858.364-.156.728.364.832.416.312-.416.623-.416.675-.416.312.052.104.104.104.208-1.455 1.144.624 2.443 1.091 1.144 1.819.208 1.299-1.299.883-1.507-.363-.052-.156-.156 0-.156.104-.052.364-.052.364.104 0-.832.052-1.351.468-1.611.468.312.52.779.468 1.611.052-.156.26-.104.416-.104.052.104.364.104.052.208-.468.156-.936 1.715.883 1.455.416 1.299 2.599-.157 1.04-1.145zm-1.196 1.508l.52.624-1.039-.156.519-.468zm-1.663-.728l.676 1.195h-1.3l.624-1.195zm-1.611.728l-.52.624 1.04-.156-.52-.468z" fill="#fff"/>
                    <path d="M13.122 83.358c-.208-.312-.416-.936-.572-1.091.52-.416 2.391-.468 3.067-.468.987 0 2.391.156 2.858.468 0 0-.208.728-.416 1.195-.779-.312-1.871-.416-2.546-.416-.833.001-1.768.104-2.391.312zm4.677-.987c.156 0 .312.208.312.312 0 .208-.156.364-.312.364s-.364-.156-.364-.364c0-.104.208-.312.364-.312zm-1.091-.208c.156 0 .312.156.312.312s-.156.364-.312.364-.364-.208-.364-.364.207-.312.364-.312zm-1.196-.104c.208 0 .363.156.363.312a.355.355 0 0 1-.363.364c-.104 0-.312-.156-.312-.364 0-.156.208-.312.312-.312zm-1.143.104c.208 0 .364.156.364.312s-.156.364-.364.364c-.156 0-.312-.208-.312-.364s.155-.312.312-.312zm-1.04.208c.156 0 .364.208.364.312 0 .208-.208.364-.364.364s-.364-.156-.364-.364c0-.104.208-.312.364-.312z" fill="#fff"/>
                    <path d="M15.564 83.254c1.299 0 2.495.26 2.495.416 0 .104-1.04.208-2.391.208-1.299 0-2.443-.104-2.443-.208 0-.156 1.04-.416 2.339-.416zM43.058 79.304c-.052 0-.208-.104 0-.156.104 0 .416 0 .728.416.156-.052.467-.572.832-.416 0 .052-1.144 2.599-1.299 2.807-.468-.26-3.431-.468-3.17-.468.26 0-2.651.104-3.119.468-.156-.26-1.299-2.858-1.299-2.858.364-.156.728.364.884.416.26-.416.571-.416.623-.416.312.052.104.104.104.208-1.403 1.144.624 2.443 1.091 1.144 1.819.208 1.299-1.299.883-1.507-.363-.052-.104-.156 0-.156.156-.052.364-.052.364.104 0-.832.052-1.351.468-1.611.468.312.52.779.468 1.611.052-.156.26-.104.467-.104.052.104.312.104.052.208-.52.156-.987 1.715.832 1.455.415 1.299 2.598-.157 1.091-1.145zm-1.247 1.508l.571.624-1.039-.156.468-.468zm-1.663-.728l.676 1.195h-1.248l.572-1.195zm-1.611.728l-.52.624 1.039-.156-.519-.468z" fill="#fff"/>
                    <path d="M37.809 83.358c-.208-.312-.468-.936-.572-1.091.468-.416 2.339-.468 3.015-.468 1.04 0 2.391.156 2.859.468 0 0-.208.728-.364 1.195-.832-.312-1.871-.416-2.599-.416-.78.001-1.715.104-2.339.312zm4.626-.987c.156 0 .364.208.364.312 0 .208-.208.364-.364.364s-.312-.156-.312-.364c0-.104.156-.312.312-.312zm-1.092-.208c.156 0 .364.156.364.312s-.208.364-.364.364-.312-.208-.312-.364.156-.312.312-.312zm-1.143-.104c.156 0 .312.156.312.312 0 .208-.156.364-.312.364s-.364-.156-.364-.364c0-.156.207-.312.364-.312zm-1.196.104c.208 0 .364.156.364.312s-.156.364-.364.364c-.104 0-.312-.208-.312-.364s.208-.312.312-.312zm-1.039.208c.156 0 .364.208.364.312 0 .208-.208.364-.364.364s-.312-.156-.312-.364c0-.104.156-.312.312-.312z" fill="#fff"/>
                    <path d="M40.2 83.254c1.299 0 2.495.26 2.495.416 0 .104-1.04.208-2.391.208-1.299 0-2.443-.104-2.443-.208 0-.156 1.039-.416 2.339-.416z" fill="#fff"/>
                    <path d="M14.94 97.34c.104-.209.26-.779.364-.936-.104-.209-.26-.417-.468-.417.104-.208.416-.468.364-.624-.052-.208-.208-.156-.572-.312.104-.26.416-.416.52-.416.208-.052.208-.312.571-.468.312-.208.676-.208 1.04-.208.572.052 2.027.468 1.664 2.234.832 1.768 3.95-.623 4.989-.623-.208.415-.416.832-.676 1.195.312.209.676 0 1.04 0-.364.988-.936 1.404-1.403 1.768.468 1.611 2.287.986 3.95.779-.208.52-.884.623-1.195 1.039.571.572 1.195 1.352 1.559 2.131-.728-.467-2.235-.986-2.754-1.195-.936-.363-2.963-.363-3.95 0 .208.416.571.572.883.832-.468.936-1.507.363-2.079.207-.52.365-1.456.365-1.663.156 0 0 0-.207.26-.467.208-.26-.572-.312-.832-.729 0-.311.468 0 .624-.363-.468-.985-2.548-1.193-2.236-3.583zm1.404-2.807c.104 0 .156.104.156.208s-.052.208-.156.208-.208-.104-.208-.208.104-.208.208-.208zM28.921 97.6c.052-.156.26-.729.416-.936-.156-.208-.364-.416-.468-.416.052-.208.416-.468.312-.624-.052-.156-.208-.104-.52-.312.104-.26.312-.416.52-.416s.208-.312.468-.52c.364-.104.728-.104 1.144-.156.52.052 2.027.468 1.611 2.235.884 1.767 3.95-.624 5.042-.624-.208.416-.52.832-.676 1.195.26.209.676 0 .987 0-.312.988-.935 1.404-1.403 1.82.468 1.506 2.339.936 3.95.727-.156.572-.832.623-1.195 1.039.572.572 1.195 1.352 1.611 2.184-.728-.52-2.287-1.039-2.754-1.248-1.04-.363-3.014-.363-4.002 0 .208.416.624.625.883.779-.52 1.041-1.455.469-2.027.262-.572.363-1.455.363-1.715.207 0 0 0-.312.312-.52.156-.26-.572-.312-.832-.729 0-.363.364 0 .624-.363-.521-.987-2.547-1.194-2.288-3.584zm1.352-2.755c.156 0 .208.052.208.156 0 .104-.052.208-.208.208-.104 0-.156-.104-.156-.208s.051-.156.156-.156zM22.216 107.578c.104-.207.26-.779.416-.986-.156-.156-.312-.416-.468-.416.052-.209.364-.416.312-.572-.052-.209-.156-.156-.572-.363.156-.209.416-.365.572-.416.208 0 .208-.26.52-.469.312-.156.728-.156 1.091-.207.52.051 1.975.467 1.611 2.287.832 1.715 4.002-.625 5.042-.625-.208.365-.467.781-.675 1.195.312.209.675 0 .987 0-.312.936-.884 1.352-1.352 1.768.468 1.561 2.287.988 3.95.779-.208.52-.883.572-1.195.988.572.623 1.195 1.352 1.559 2.184-.727-.469-2.235-.988-2.754-1.195-.987-.365-2.962-.365-4.002 0 .208.363.572.57.936.779-.52.986-1.507.416-2.131.207-.468.416-1.403.416-1.664.209 0 0 0-.26.312-.469.208-.312-.571-.363-.832-.727 0-.365.416 0 .624-.365-.519-1.039-2.598-1.246-2.287-3.586zm1.456-2.807c.052 0 .156.053.156.209 0 .051-.104.154-.156.154-.156 0-.26-.104-.26-.154 0-.156.104-.209.26-.209z" fill="#cf4037"/>
                    <path d="M23.62 75.51s.883.364 1.663.052c.883-.364 1.715-.572 2.339-.26v7.537c-.52-.208-1.248-.104-2.079.104-.779.156-1.247.208-1.923.052V75.51zm2.495 5.562c0-.26.208-.312.312-.312s.26.052.26.312c0 .312-.156.416-.26.416s-.312-.105-.312-.416zm-.208 0c0 .52.364.571.52.571.104 0 .467-.052.467-.571 0-.468-.363-.52-.467-.52-.156 0-.52.052-.52.52zm-.416.26l-.364-.728h-.26v1.039h.208v-.728l.416.728h.208v-1.039h-.208v.728zm-1.039.416h.208v-1.04h-.208v1.04zm2.598-3.379h-.312l-.156.779-.208-.779h-.312v1.04h.208v-.832l.208.832h.208l.208-.832v.832h.156v-1.04zm-1.871.624c0-.312.156-.364.26-.364.104 0 .26.052.26.364 0 .26-.156.364-.26.364-.104-.001-.26-.105-.26-.364zm-.208 0c0 .468.312.52.468.52.104 0 .468-.052.468-.52s-.364-.52-.468-.52c-.156 0-.468.052-.468.52zm-.779-.26h.208c.104 0 .208.052.208.364 0 .156-.053.312-.208.312h-.208v-.676zm-.208.883h.416c.364 0 .416-.364.416-.52 0-.208-.052-.52-.364-.52h-.468v1.04zm1.923-2.443l-.416-.728h-.208v.988h.156v-.676l.416.676h.208v-.988h-.156v.728zm-1.143.312h.208v-.988h-.208v.988zM23.412 75.51l-.727.572v7.588l.727-.675V75.51z" fill="#fff"/>
                    <path d="M22.892 83.774l.728-.572c.52.156 1.611-.052 2.131-.156.883-.104 1.248-.312 1.871 0-.364.156-.572.467-.572.728h-4.158zM32.507 83.774l-.675-.572c-.572.156-1.611-.052-2.131-.156-.935-.104-1.247-.312-1.767 0 .26.156.467.467.416.728h4.157zM32.04 75.407l.675.675v7.484l-.675-.623v-7.536z" fill="#fff"/>
                    <path d="M31.78 75.51s-.884.364-1.611.052c-.936-.364-1.715-.572-2.234-.26v7.537c.467-.208 1.091-.104 1.923.104.832.156 1.299.208 1.923.052V75.51h-.001zm-3.014 6.081h.416c.364 0 .416-.312.416-.52s-.052-.468-.416-.468h-.416v.988zm.207-.831h.208c.104 0 .208.052.208.312 0 .208-.052.364-.208.364h-.208v-.676zm.884.468c0 .52.364.572.52.572.104 0 .468-.052.468-.572 0-.468-.363-.52-.468-.52-.156 0-.52.052-.52.52zm.26 0c0-.26.104-.312.26-.312.104 0 .26.052.26.312 0 .312-.156.364-.26.364-.156-.001-.26-.052-.26-.364zm-.832-2.027h.468v-.208h-.468v-.208h.52v-.156h-.728v.987h.208v-.415zm.78.415h.208v-.987h-.208v.987zm-.936-2.806c0-.156-.156-.364-.416-.364-.312 0-.468.208-.468.52 0 .364.156.572.468.572.208 0 .364-.156.416-.364h-.208c-.052.104-.104.156-.208.156-.208 0-.26-.156-.26-.364 0-.259.156-.312.26-.312.156 0 .156.104.208.156h.208zm.156.312c0 .468.364.52.52.52.104 0 .468-.052.468-.52s-.364-.52-.468-.52c-.156 0-.52.052-.52.52zm.26 0c0-.312.156-.364.26-.364.104 0 .26.052.26.364 0 .26-.156.364-.26.364-.104-.001-.26-.105-.26-.364zm1.507.208l-.364-.728h-.26v1.039h.208v-.728l.416.728h.208v-1.039h-.208v.728zM27.778 83.203c-.312.312-.468.312-.364.572h.624c.052-.261 0-.417-.26-.572z" fill="#fff"/>
                </g>
            </svg>

		</div>
	)
}

export default Education
