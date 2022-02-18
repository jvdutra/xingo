import { useState } from 'react';
import Countdown, { zeroPad } from 'react-countdown';
import { Row, Col } from 'react-bootstrap';
import Icon from '@mdi/react';
import {
    mdiHelpCircleOutline as HelpIcon,
    mdiInformationOutline as InfoIcon,
    mdiCogOutline as SettingsIcon,
    mdiChartBoxOutline as StatsIcon
} from '@mdi/js';

import { InfoDialog, HelpDialog, SettingsDialog, StatsDialog } from '../dialog';

import { CustomButton } from '../default'

import { getNextDay } from '../../utils/Time';

import logo from '../../assets/images/logo.png';

import './Header.css';

export default function Header() {
    const [showInfoDialog, setShowInfoDialog] = useState(false);
    const [showHelpDialog, setShowHelpDialog] = useState(false);
    const [showSettingsDialog, setShowSettingsDialog] = useState(false);
    const [showStatsDialog, setShowStatsDialog] = useState(false);

    const renderCountdown = ({ hours, minutes, seconds, completed }: any) => {
        if(completed) {
            return <span>Reinicie a página para jogar com a palavra nova!</span>
        }

        return (
            <span>
                Próxima palavra em&nbsp;
                <strong>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</strong>
            </span>
        )
    }

    return (
        <>
            <SettingsDialog show={showSettingsDialog} handleClose={() => setShowSettingsDialog(false)} />
            <StatsDialog show={showStatsDialog} handleClose={() => setShowStatsDialog(false)} />
            <HelpDialog show={showHelpDialog} handleClose={() => setShowHelpDialog(false)} />
            <InfoDialog show={showInfoDialog} handleClose={() => setShowInfoDialog(false)} />

            <Row className="header">
                <Col xs={3} className="header-buttons">
                    <CustomButton tabIndex="-1" variant="secondary" onClick={() => setShowHelpDialog(true)} style={{ marginRight: '5px' }}>
                        <Icon path={HelpIcon} size={1} />
                    </CustomButton>
                    <CustomButton tabIndex="-1" variant="secondary" onClick={() => setShowInfoDialog(true)}>
                        <Icon path={InfoIcon} size={1} />
                    </CustomButton>
                </Col>
                <Col xs={6} className="logo">
                    <img
                        src={logo} alt="Xingo"
                        draggable={false}
                    />
                </Col>
                <Col xs={3} className="header-buttons">
                    <CustomButton tabIndex="-1" variant="secondary" onClick={() => setShowSettingsDialog(true)} style={{ marginRight: '5px' }}>
                        <Icon path={SettingsIcon} size={1} />
                    </CustomButton>
                    <CustomButton tabIndex="-1" variant="secondary" onClick={() => setShowStatsDialog(true)}>
                        <Icon path={StatsIcon} size={1} />
                    </CustomButton>
                </Col>
            </Row>

            <Row>
                <Col className="justify-content-center text-center">
                    <Countdown daysInHours={true} date={getNextDay()} renderer={renderCountdown as any} />
                </Col>
            </Row>
        </>
    )
}
