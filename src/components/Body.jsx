import { useState } from "react";

export default function Body(){
    const [password, showPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    function getPasswordValue(e){
        setPasswordValue(e.target.value);
    }

    return (
        <div className="pt-[72px] pb-28 bg-[#f0f2f5]">
            <div className="relative w-[980px] mx-auto py-5 flex">
                <div className="w-[580px] pr-8">
                    <div className="pt-28 pb-4">
                        <img class="h-[106px] -m-7" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook"/>
                    </div>
                    <p className="text-[28px] leading-8 w-[500px]">Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
                </div>
                <div className="h-[456px] w-[396px] font-sans">
                    <div className="pb-6 pt-3 bg-white rounded-lg shadow-[0_2px_4px_rgba(0,0,0,.1),0_8px_16px_rgba(0,0,0,.1)] mt-10 w-[396px] text-center">
                        <form className="m-0 p-0">
                            <div className="flex flex-col">
                                <div className="w-[364px] m-auto py-[6px]">
                                    <input type="text" className="m-0 rounded-md text-[17px] py-[14px] px-4 w-[364px] appearance-none border-solid border border-[#dddfe2] outline-none leading-4 align-middle focus:border-[#1b74e4] focus:shadow-[0_0_0_2px_#e7f3ff] focus:caret-[#1b74e4]" name="email" id="email" placeholder="Email hoặc số điện thoại" autofocus="1" aria-label="Email hoặc số điện thoại"/>
                                </div>
                                <div className="w-[364px] m-auto py-[6px]">
                                    <div className="m-0 rounded-md text-[17px] py-[14px] px-4 w-[364px] h-[49px] border-solid border-[1px] border-[#dddfe2] outline-none leading-4 align-middle focus:border-[#1b74e4] focus:shadow-[0_0_0_2px_#e7f3ff] focus:caret-[#1b74e4]">
                                        <input type={password ? 'text' : 'password'} className="appearance-none float-left w-[300px] border-none outline-none" name="pass" id="pass" placeholder="Mật khẩu" aria-label="Mật khẩu" onInput={getPasswordValue}/>
                                        <div className={`relative ${passwordValue.length == 0 ? 'hidden' : ''}`}>
                                            <a href="#" role="button">
                                                <div className="rounded-full absolute -bottom-6 -right-2 h-7 w-7 hover:bg-[rgba(0,0,0,.05)] active:bg-[rgba(0,0,0,.1)]" onClick={() => showPassword(!password)}>
                                                    <div className="absolute right-[6px] bottom-[6px] h-4 w-4" style={{ backgroundImage: `url(${password ? 'https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png' : 'https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png'})`}}></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[364px] m-auto py-3">
                                    <button className="bg-[#1877f2] border-none rounded-md text-xl webkit antialiased font-bold leading-[48px] px-4 w-full text-white" name="login" type="submit">Đăng nhập</button>
                                </div>
                                <div className="mt-[1px]">
                                    <a href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjg1MjA1NjY2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login" className="text-[#1877f2] text-sm font-medium hover:underline">Quên mật khẩu?</a>
                                </div>
                                <div className="flex items-center text-center my-5 mx-4 border-b border-solid border-b-[#dadde1]"></div>
                                <div className="pt-1">
                                    <a role="button" href="#" className="border-none rounded-md text-[17px] leading-[48px] py-[14px] px-4 bg-[#42b72a] text-white font-bold antialiased transtiion-all hover:bg-[#36a420]">Tạo tài khoản mới</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-7 text-center text-sm">
                        <a href="https://www.facebook.com/pages/create/?ref_type=registration_form" class="font-semibold hover:underline">Tạo Trang</a> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
                    </div>
                </div>
            </div>
        </div>
    )
}