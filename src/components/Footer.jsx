import { useTranslation } from 'react-i18next';

export default function Footer(){
    const [t, i18n] = useTranslation();

    return (
        <div className="pt-5">
            <div className="mx-auto w-[980px]">
                <ul className="pt-3 items-center flex flex-wrap text-xs text-[#8a8d91]">
                    <li title="Tiếng Việt">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</a>
                    </li>
                    <li title="English (UK)" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('enGB')}>English &#40;UK&#41;</a>
                    </li>
                    <li title="Traditional Chinese (Taiwan)" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('zhTW')}>中文&#40;台灣&#41;</a>
                    </li>
                    <li title="Korean" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('ko')}>한국어</a>
                    </li>
                    <li title="Japanese" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('ja')}>日本語</a>
                    </li>
                    <li title="French (France)" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('fr')}>Français &#40;France&#41;</a>
                    </li>
                    <li title="Thai" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('th')}>ภาษาไทย</a>
                    </li>
                    <li title="Spanish" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('es')}>Español</a>
                    </li>
                    <li title="Portuguese (Brazil)" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('pt')}>Português &#40;Brasil&#41;</a>
                    </li>
                    <li title="Germany" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('de')}>Deutsch</a>
                    </li>
                    <li title="Italian" className="pl-2">
                        <a href="#" className="hover:underline" onClick={() => i18n.changeLanguage('it')}>Italiano</a>
                    </li>
                    <li title="Hiển thị thêm ngôn ngữ" className="ml-2 bg-[#f5f6f7] border border-solid border-[#ccd0d5] rounded-sm px-2">
                        <a href="#">
                            <i class="w-3 h-3 bg-[-28px_-297px] relative bottom-[1px] align-middle bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/zRbiYktS7eo.png')] bg-[length:283px_314px] bg-no-repeat inline-block"></i>
                        </a>
                    </li>
                </ul>
                <div className="border-b border-solid border-b-[#dddfe2] h-2 mb-2"></div>
                <ul className="-ml-5 text-xs text-[#8a8d91] flex flex-wrap">        
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/reg">
                        {t('footer.signUp')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/login/">
                        {t('footer.signIn')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://messenger.com/">
                        {t('footer.messenger')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/lite/">
                        {t('footer.lite')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://www.facebook.com/watch/"
                        >
                        {t('footer.watch')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/places/">
                        {t('footer.places')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/games/">
                        {t('footer.games')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/marketplace/">
                        {t('footer.marketplace')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://pay.facebook.com/"
                        target="_blank"
                        >
                        {t('footer.metaPay')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://www.meta.com/"
                        target="_blank"
                        >
                        {t('footer.metaStore')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://www.meta.com/quest/"
                        target="_blank"
                        >
                        {t('footer.metaQuest')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT2Wi7atQpnYX1XWaD0HvkQkZOXkE0oBnT29mMp0KpXxSAVacB6qHcj-28Wtkt32QwF-L0_lNYLjOtClOIra-ueGc36ALO8Xhr0dQjUDerbSMIEbX3ReDE3K3mdpojua1mI09PTVXHSGAYWgDlYL4fElwN68O8ye7N7fkxvu4Hc"
                        target="_blank"
                        rel="nofollow"
                        data-lynx-mode="asynclazy"
                        >
                        {t('footer.insta')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/fundraisers/">
                        {t('footer.fundraisers')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/biz/directory/"
                        >
                        {t('footer.service')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                        >
                        {t('footer.vic')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/privacy/policy/?entry_point=facebook_page_footer"
                        >
                        {t('footer.privacyPolicy')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/privacy/center/?entry_point=facebook_page_footer"
                        >
                        {t('footer.privacyCentre')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/groups/discover/">
                        {t('footer.groups')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://about.meta.com/"
                        accesskey="8"
                        >
                        {t('footer.about')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
                        >
                        {t('footer.createAd')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline" href="https://facebook.com/pages/create/?ref_type=site_footer">
                        {t('footer.createPage')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://developers.facebook.com/?ref=pf"
                        >
                        {t('footer.developer')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/careers/?ref=pf"
                        >
                        {t('footer.career')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/policies/cookies/"
                        data-nocookies="1"
                        >
                        {t('footer.cookie')}
                        </a>
                    </li>
                    <li className="pl-5 hover:underline">
                        <a
                        class="_41ug"
                        data-nocookies="1"
                        href="https://www.facebook.com/help/568137493302217"
                        >
                        {t('footer.adChoice')}
                        <i class="w-4 h-4 bg-[-263px_-251px] relative align-middle bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/zRbiYktS7eo.png')] bg-[length:283px_314px] bg-no-repeat inline-block"></i>
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        data-nocookies="1"
                        href="https://facebook.com/policies?ref=pf"
                        accesskey="9"
                        >
                        {t('footer.terms')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/help/?ref=pf"
                        accesskey="0"
                        >
                        {t('footer.help')}
                        </a>
                    </li>
                    <li className="pl-5">
                        <a className="hover:underline"
                        href="https://facebook.com/help/637205020878504"
                        >
                        {t('footer.contactUploadingNonUsers')}
                        </a>
                    </li>
                </ul>
                <div className="my-5 text-[11px] text-[#8a8d91]">
                    <p>Meta &copy; 2023</p>
                </div>
            </div>
        </div>
    )
}