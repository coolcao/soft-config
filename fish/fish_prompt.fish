# 该脚本为设置fish提示样式，直接在fish终端执行即可设置
# 大致样式如下：
# [16:32:20]  coolcao in /Users/coolcao
# ➤ ⏽
function fish_prompt --description 'coolcao prompt'
    #Save the return status of the previous command
    set -l last_pipestatus $pipestatus
    set arrow_color "#FFCC00"

    switch "$USER"
        case root toor
            printf '%s@%s %s%s%s# ' $USER (prompt_hostname) (set -q fish_color_cwd_root and set_color $fish_color_cwd_root or set_color $fish_color_cwd) \ (prompt_pwd) (set_color normal)
        case '*'
            printf '\f[%s] %s%s in %s%s %s%s%s' (date "+%H:%M:%S") (set_color brblue) \ $USER  (set_color $fish_color_cwd) $PWD (set_color brblue)
            fish_git_prompt (set_color yellow)
            echo (set_color $arrow_color)
            printf '➤ '
    end
end
funcsave fish_prompt